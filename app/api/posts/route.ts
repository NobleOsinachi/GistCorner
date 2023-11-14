import { NextRequest, NextResponse } from "next/server";
import { Data, posts } from "../data/route";

// GET: /api/posts
export const GET = async (req: NextRequest) => {
  try {
    const { Posts } = posts;

    return Posts
      ? NextResponse.json(Posts, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      : NextResponse.json(
          { error: "Data not found" },
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
};
