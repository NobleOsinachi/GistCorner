import { shuffleArray } from "@/utils/shuffleArray";
import { NextRequest, NextResponse } from "next/server";
// import { type } from "@/types";

export interface Question {
  id: number;
  type: string;
  word: string;
  answers: {
    correct: string;
    incorrect: string;
  };
}

const questions: Array<Question> = [
  {
    id: 1,
    type: "similar",
    word: "Bunny",
    answers: {
      correct: "Rabbit",
      incorrect: "Honey",
    },
  },
  {
    id: 2,
    type: "opposite",
    word: "South",
    answers: {
      correct: "North",
      incorrect: "West",
    },
  },
  {
    id: 3,
    type: "opposite",
    word: "Under",
    answers: {
      correct: "Over",
      incorrect: "Off",
    },
  },
  {
    id: 4,
    type: "opposite",
    word: "hi",
    answers: {
      correct: "bye",
      incorrect: "hello",
    },
  },
  {
    id: 5,
    type: "similar",
    word: "meow",
    answers: {
      correct: "meow",
      incorrect: "woof",
    },
  },
  {
    id: 6,
    type: "similar",
    word: "slow",
    answers: {
      correct: "Decelerate",
      incorrect: "Illustrate",
    },
  },
  {
    id: 7,
    type: "opposite",
    word: "intensify",
    answers: {
      correct: "Abate",
      incorrect: "Accelerate",
    },
  },
  {
    id: 8,
    type: "similar",
    word: "thought",
    answers: {
      correct: "Idea",
      incorrect: "Intuition",
    },
  },
  {
    id: 9,
    type: "similar",
    word: "undeniable",
    answers: {
      correct: "Indisputable",
      incorrect: "Inseparable",
    },
  },
  {
    id: 10,
    type: "opposite",
    word: "impetuous",
    answers: {
      correct: "Cautious",
      incorrect: "Capacious",
    },
  },
];

// export const GET = async (req: NextRequest) => {
//   const { searchParams } = new URL(req.url);
//   const id = Number.parseInt(searchParams.get("id")!, 10);
//   const questionById = questions.find((q) => q.id === id);

//   return NextResponse.json({ questionById, questions });
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
    return NextResponse.json(shuffleArray(questions));
  }
};
