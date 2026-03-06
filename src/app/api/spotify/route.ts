// app/api/spotify/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

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

  return response.json();
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
    maxAge: expires_in, // 1 hour
    expires: new Date(Date.now() + expires_in * 1000), // 1 hour
  });
}

async function getCurrentlyPlaying(token: string) {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

async function getRecentlyPlayed(token: string) {
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    let access_token = cookieStore.get("spotify_access_token")?.value;

    if (!access_token) {
      const { access_token: new_access_token } = await getAccessToken();
      await saveAccessToken(new_access_token, 3600); // Spotify tokens typically expire in 1 hour
      access_token = new_access_token;
    }

    const isValid = await checkValidityOfToken(access_token!);

    if (!isValid) {
      const { access_token: new_access_token } = await getAccessToken();
      await saveAccessToken(new_access_token, 3600); // Spotify tokens typically expire in 1 hour
      access_token = new_access_token;
    }

    const response = await getCurrentlyPlaying(access_token!);

    if (response.status > 400) {
      return NextResponse.json(
        { error: response.statusText },
        { status: response.status === 204 ? 400 : response.status },
      );
    }

    if (response.status === 204) {
      const response = await getRecentlyPlayed(access_token!);
      const recentlyPlayed = await response.json();
      const song = recentlyPlayed.items[0].track;

      return NextResponse.json({
        isPlaying: false,
        title: song.name,
        artist: song.artists.map((artist: any) => artist.name).join(", "),
        album: song.album.name,
        albumImageUrl: song.album.images[0]?.url,
        songUrl: song.external_urls.spotify,
      });
    }

    const song = await response.json();

    if (!song.item) {
      const response = await getRecentlyPlayed(access_token!);
      const recentlyPlayed = await response.json();
      const song = recentlyPlayed.items[0].track;

      return NextResponse.json({
        isPlaying: false,
        title: song.name,
        artist: song.artists.map((artist: any) => artist.name).join(", "),
        album: song.album.name,
        albumImageUrl: song.album.images[0]?.url,
        songUrl: song.external_urls.spotify,
      });
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
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ isPlaying: false });
  }
}
