import { headers } from "next/headers";

const getBaseUrl = () => {
  const headersList = headers();

  const baseUrl = process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";
  return baseUrl;
};

export default getBaseUrl;
