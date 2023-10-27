import { NextRequest, NextResponse } from "next/server";
import { GiftType } from "@/types";

const listOfGifts: GiftType[] = [
  {
    id: 1,
    imgUrl: "/img/rice.jpg",
    name: "Rice",
    currency: "$",
    amount: "6",
    links: [2, 3, 4, 5],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 2,
    imgUrl: "/img/beans.jpg",
    name: "Beans",
    currency: "$",
    amount: "6",
    links: [3, 4, 5, 6],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 3,
    imgUrl: "/img/cooking-oil.jpg",
    currency: "$",
    amount: "5",
    name: "Cooking Oil",
    links: [4, 5, 6, 7],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 4,
    imgUrl: "/img/noodles.jpg",
    currency: "$",
    amount: "6",
    name: "Noodles",
    links: [5, 6, 7, 8],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 5,
    imgUrl: "/img/cereal.jpg",
    currency: "$",
    amount: "3",
    name: "Cereals",
    links: [6, 7, 8, 9],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 6,
    imgUrl: "/img/sweet-potato-and-yam.jpg",
    currency: "$",
    amount: "2",
    name: "Sweet Potatoes and Yam",
    links: [7, 8, 9, 10],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 7,
    imgUrl: "/img/dialy-products.jpg",
    currency: "$",
    amount: "5",
    name: "Dialy Products",
    links: [8, 9, 10, 11],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 8,
    imgUrl: "/img/seasoning.jpg",
    currency: "$",
    amount: "1",
    name: "Seasoning",
    links: [9, 10, 11, 12],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 9,
    imgUrl: "/img/pasta.jpg",
    currency: "$",
    amount: "1",
    name: "Pasta",
    links: [10, 11, 12, 13],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 10,
    imgUrl: "/img/veggies.jpg",
    currency: "$",
    amount: "2",
    name: "Veggies",
    links: [11, 12, 13, 14],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 11,
    imgUrl: "/img/frozen-meat-and-fish.jpg",
    currency: "$",
    amount: "4",
    name: "Frozen Meat and Fish",
    links: [12, 13, 14, 15],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 12,
    imgUrl: "/img/soy.jpg",
    currency: "$",
    amount: "100",
    name: "Soy",
    links: [13, 14, 15, 16],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 13,
    imgUrl: "/img/cow.jpg",
    currency: "$",
    amount: "100",
    name: "Cow",
    links: [14, 15, 16, 1],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 14,
    imgUrl: "/img/canned-food.jpg",
    currency: "$",
    amount: "1",
    name: "Canned Food",
    links: [15, 16, 1, 2],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 15,
    imgUrl: "/img/goat-and-chicken.jpg",
    currency: "$",
    amount: "72",
    name: "1 goat and 2 chickens",
    links: [16, 1, 2, 3],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
  {
    id: 16,
    imgUrl: "/img/flour.jpg",
    currency: "$",
    amount: "100",
    name: "Flour",
    links: [1, 2, 3, 4],
    description:
      "With chickens and a goat, you’ll help provide a steady supply of eggs, milk, and protein to feed children and help families. We’ve paired our most popular animals so you can give 2 or more struggling families a gift they’ll...",
  },
];

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = Number.parseInt(searchParams.get("id")!, 10);
  const currentGiftItem = listOfGifts.find((gift) => gift.id === id);
  const associatedGifts = listOfGifts.filter((gift) =>
    currentGiftItem?.links!.includes(gift.id)
  );
  return NextResponse.json({ currentGiftItem, associatedGifts });
};
 