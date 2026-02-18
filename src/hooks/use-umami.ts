import { getClient } from "@umami/api-client";

const client = getClient({
  apiKey: process.env.NEXT_PUBLIC_UMAMI_API_KEY,
  apiEndpoint: process.env.NEXT_PUBLIC_UMAMI_API_CLIENT_ENDPOINT,
});

const websiteID = process.env.NEXT_PUBLIC_UMAMI_WEB_ID!;

export async function getWebsiteMetrics() {
  const { data: pages } = await client.getWebsiteValues(websiteID, {
    startAt: new Date("2024-08-01").getTime(),
    endAt: new Date().getTime(),
    // @ts-expect-error
    type: "path",
  });

  return { pages };
}
