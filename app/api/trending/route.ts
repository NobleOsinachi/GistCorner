import getBaseUrl from "@/components/getBaseUrl";

import { NextRequest, NextResponse } from "next/server";
import { Data } from "../data/route";

// GET: /api/trending
export const GET = async (req: NextRequest) => {
  try {
    const data = await fetch(req.nextUrl.origin + "/api/data");
    const { Trending }: Data = await data.json();

    return Trending
      ? NextResponse.json(Trending, { status: 200 })
      : NextResponse.json({ error: "Data not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(); //("Internal Server Error", { status: 500 });
  }
};
