import { NextRequest, NextResponse } from "next/server";
import { posts } from "../../data/route";

interface PostIdProps {
  params: { id: string };
}

export const GET = async (req: NextRequest, { params }: PostIdProps) => {
  try {
    // console.log(req.nextUrl.origin);

    const id = Number.parseInt(params.id!, 10);

    const postById = posts.Posts.find((post) => post.id === id);

    return postById
      ? NextResponse.json(postById, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      : NextResponse.json(
          { error: "Post not found" },
          { status: 404, headers: { "Content-Type": "application/json" } },
        );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
};
