// app/api/spotify/callback/route.ts
//
// Step 2 of the Spotify OAuth Authorization Code Flow.
//
// Spotify redirects here with `?code=...` after you approve access on the
// consent screen. This exchanges that code for a NEW access_token and a NEW
// refresh_token. The refresh token is what you paste into your .env
// (SPOTIFY_REFRESH_TOKEN) to keep the /api/spotify endpoint working.

import { NextResponse } from "next/server";

const CLIENT_ID =
  process.env.SPOTIFY_CLIENT_ID ?? process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET ??
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function getRedirectUri(request: Request) {
  if (process.env.SPOTIFY_REDIRECT_URI) {
    return process.env.SPOTIFY_REDIRECT_URI;
  }
  const origin = new URL(request.url).origin;
  return `${origin}/api/spotify/callback`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  // The user denied access, or Spotify returned an error on the consent screen.
  if (error) {
    return NextResponse.json(
      { error: `Spotify authorization failed: ${error}` },
      { status: 400 },
    );
  }

  if (!code) {
    return NextResponse.json(
      {
        error:
          "Missing `code` query parameter. Start the flow at /api/spotify/login instead.",
      },
      { status: 400 },
    );
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: getRedirectUri(request),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    // e.g. invalid_grant, redirect_uri_mismatch, invalid_client
    return NextResponse.json(
      {
        error: data.error,
        error_description: data.error_description,
        hint: "Make sure the redirect URI matches the one registered in your Spotify Developer Dashboard, and that CLIENT_ID/CLIENT_SECRET are correct.",
      },
      { status: response.status },
    );
  }

  // Success. `data.refresh_token` is the new long-lived token you must save.
  return NextResponse.json({
    message:
      "Success! Copy the refresh_token below into your .env as SPOTIFY_REFRESH_TOKEN, then restart the dev server.",
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    scope: data.scope,
    expires_in: data.expires_in,
    token_type: data.token_type,
  });
}
