const getBaseUrl = () => {
  const baseUrl = process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";
  // req.nextUrl.origin;
  return baseUrl;
};

export default getBaseUrl;
