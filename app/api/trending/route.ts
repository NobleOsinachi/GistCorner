import { NextRequest, NextResponse } from "next/server";
import { Data, posts } from "../data/route";

// GET: /api/trending
export const GET = async (req: NextRequest) => {
  try {
    const { Trending } = posts;

    return Trending
      ? NextResponse.json(Trending, { status: 200 })
      : NextResponse.json({ error: "Data not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
};
