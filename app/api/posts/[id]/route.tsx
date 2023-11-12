import { useRouter } from "next/router";

import { NextRequest, NextResponse } from "next/server";
import { posts } from "../../data/route";
import { NextApiResponse } from "next";

interface PostIdProps {
  params: { id: string };
}
export const GET = async (req: NextRequest, { params }: PostIdProps) => {
  const id = Number.parseInt(params.id!, 10);

  const postById = posts.Posts.find((post) => post.id === id);

  // console.log(req.nextUrl.origin);

  return postById
    ? NextResponse.json(postById, { status: 200 })
    : NextResponse.json({ error: "Post not found" }, { status: 404 });
};
