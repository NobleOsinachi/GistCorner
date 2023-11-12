import { NextRequest, NextResponse } from "next/server";
import { Data, posts } from "../data/route";

// GET: /api/popular
export const GET = async (req: NextRequest) => {
  try {
    const { Popular } = posts;

    return Popular
      ? NextResponse.json(Popular, { status: 200 })
      : NextResponse.json({ error: "Data not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
};
