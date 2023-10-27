import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
//   const message = "Hello World";
//   return NextResponse.json({ message });
// };

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = Number.parseInt(searchParams.get("id")!, 10);

  if (!isNaN(id)) {
    // If 'id' is provided, return only the question with that ID
    const questionById = questions.find((q) => q.id === id);
    if (questionById) {
      return NextResponse.json(questionById);
    } else {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }
  } else {
    // If 'id' is not provided, return all questions
    return NextResponse.json(questions);
  }
};
