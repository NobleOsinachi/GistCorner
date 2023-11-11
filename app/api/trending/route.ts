import getBaseUrl from "@/components/getBaseUrl";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    //   const data = await fetch("/api/data");

    //   const res = await data.json();

    const res = getBaseUrl();

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(); //("Internal Server Error", { status: 500 });
  }
};
