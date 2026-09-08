// app/api/spotify/login/route.ts
//
// Step 1 of the Spotify OAuth Authorization Code Flow.
//
// Visit this endpoint in your browser (e.g. http://localhost:3000/api/spotify/login)
// whenever your refresh token is expired/revoked and you need a brand new one.
// It redirects you to Spotify's consent screen. After you approve, Spotify
// redirects back to /api/spotify/callback with a `code`.

import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;

const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

// Scopes needed by /api/spotify/route.ts (now playing + recently played).
const SCOPES = ["user-read-currently-playing", "user-read-recently-played"].join(" ");

function getRedirectUri(request: Request) {
  // Allow overriding via env (must match a Redirect URI registered in the
  // Spotify Developer Dashboard). Otherwise derive from the incoming request.
  if (process.env.SPOTIFY_REDIRECT_URI) {
    return process.env.SPOTIFY_REDIRECT_URI;
  }
  const origin = new URL(request.url).origin;
  return `${origin}/api/spotify/callback`;
}

export async function GET(request: Request) {
  const redirect_uri = getRedirectUri(request);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: SCOPES,
    redirect_uri,
    // `show_dialog=true` forces the consent screen so you always get a fresh
    // refresh token, even if you previously authorized the app.
    show_dialog: "true",
  });

  return NextResponse.redirect(`${AUTHORIZE_ENDPOINT}?${params.toString()}`);
}
