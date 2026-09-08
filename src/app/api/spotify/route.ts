// app/api/spotify/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CLIENT_ID =
  process.env.SPOTIFY_CLIENT_ID ?? process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET ??
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN =
  process.env.SPOTIFY_REFRESH_TOKEN ??
  process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

/**
 * Thrown when Spotify refuses to issue an access token from our refresh token.
 * This almost always means the refresh token is expired or has been revoked,
 * in which case a brand new one must be obtained by re-authorizing via
 * /api/spotify/login (the refresh_token grant cannot recover on its own).
 */
class RefreshTokenRevokedError extends Error {
  constructor(
    public spotifyError: string,
    public spotifyErrorDescription: string,
  ) {
    super(`Spotify refresh failed: ${spotifyError} - ${spotifyErrorDescription}`);
    this.name = "RefreshTokenRevokedError";
  }
}

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    // e.g. { error: "invalid_grant", error_description: "Refresh token revoked" }
    throw new RefreshTokenRevokedError(
      data.error ?? "unknown_error",
      data.error_description ?? response.statusText,
    );
  }

  // Spotify MAY rotate the refresh token. If it returns a new one, surface it
  // in the server logs so it can be persisted to .env.
  if (data.refresh_token && data.refresh_token !== REFRESH_TOKEN) {
    console.warn(
      "[spotify] A new refresh_token was issued. Update SPOTIFY_REFRESH_TOKEN in .env:\n",
      data.refresh_token,
    );
  }

  return data as { access_token: string; expires_in: number };
}

async function checkValidityOfToken(token: string) {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.status === 200;
}

async function saveAccessToken(token: string, expires_in: number) {
  const cookieStore = await cookies();

  cookieStore.set("spotify_access_token", token, {
    maxAge: expires_in,
    expires: new Date(Date.now() + expires_in * 1000),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Returns a valid access token, refreshing (and caching in a cookie) when the
 * current one is missing or invalid.
 */
async function resolveAccessToken() {
  const cookieStore = await cookies();
  let access_token = cookieStore.get("spotify_access_token")?.value;

  // No cached token: get a fresh one and cache it.
  if (!access_token) {
    const { access_token: new_token, expires_in } = await getAccessToken();
    await saveAccessToken(new_token, expires_in ?? 3600);
    return new_token;
  }

  // Cached token exists but may have expired/been invalidated: verify it.
  const isValid = await checkValidityOfToken(access_token);
  if (!isValid) {
    const { access_token: new_token, expires_in } = await getAccessToken();
    await saveAccessToken(new_token, expires_in ?? 3600);
    access_token = new_token;
  }

  return access_token;
}

async function getCurrentlyPlaying(token: string) {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function getRecentlyPlayed(token: string) {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function mapRecentlyPlayed(song: any) {
  return {
    isPlaying: false,
    title: song.name,
    artist: song.artists.map((artist: any) => artist.name).join(", "),
    album: song.album.name,
    albumImageUrl: song.album.images[0]?.url,
    songUrl: song.external_urls.spotify,
  };
}

export async function GET() {
  try {
    const access_token = await resolveAccessToken();

    const response = await getCurrentlyPlaying(access_token);

    if (response.status > 400) {
      return NextResponse.json(
        { error: response.statusText },
        { status: response.status === 204 ? 400 : response.status },
      );
    }

    // 204 = nothing currently playing -> fall back to recently played.
    if (response.status === 204) {
      const recent = await getRecentlyPlayed(access_token);
      const recentlyPlayed = await recent.json();
      return NextResponse.json(
        mapRecentlyPlayed(recentlyPlayed.items[0].track),
      );
    }

    const song = await response.json();

    if (!song.item) {
      const recent = await getRecentlyPlayed(access_token);
      const recentlyPlayed = await recent.json();
      return NextResponse.json(
        mapRecentlyPlayed(recentlyPlayed.items[0].track),
      );
    }

    return NextResponse.json({
      isPlaying: true,
      title: song.item.name,
      artist: song.item.artists.map((artist: any) => artist.name).join(", "),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
    });
  } catch (error) {
    // The refresh token is dead: tell the caller exactly how to recover.
    // A new refresh token CANNOT be obtained automatically — it requires
    // re-authorizing through the browser consent screen.
    if (error instanceof RefreshTokenRevokedError) {
      return NextResponse.json(
        {
          error: error.spotifyError,
          error_description: error.spotifyErrorDescription,
          action_required:
            "Your Spotify refresh token is expired or revoked. Visit /api/spotify/login in your browser to authorize again and obtain a new refresh token.",
        },
        { status: 401 },
      );
    }

    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ error: "Failed to fetch Spotify data" }, { status: 400 });
  }
}
