import { headers } from "next/headers";

const getBaseUrl = () => {
  const headersList = headers();

  const baseUrl = process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://" + headersList.get("host");
  return baseUrl;
};

export default getBaseUrl;
