import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextApiResponse) => {
  return NextResponse.json(["Business", "Travel"]);
};
