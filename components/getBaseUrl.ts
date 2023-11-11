import { headers } from "next/headers";

export function getBaseUrl() {
  const headersList = headers();

  const baseUrl = process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://" + headersList.get("host");

  return baseUrl;
}
