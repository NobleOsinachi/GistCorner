"use client";
import Link from "next/link";
import { Post as PostData } from "@/models/Post";
import Error from "@/components/Error";
import Author from "@/components/Author";
import Related from "@/components/Related";
import Spinner from "@/components/Spinner";
import { getPostById, getPosts } from "@/controllers/PostController";
import { Post } from "@/models/Post";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PostByIdProps {
  params: { id: string };
  searchParams: [{ name: "#" }];
}

const PostById = ({ params }: PostByIdProps) => {
  const id = Number.parseInt(params.id!, 10);
  console.log(id);

  const [posts, setPosts] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPostById(id);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError("Error fetching posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <Spinner></Spinner>;

  if (isError) return <Error>{isError}</Error>;

  const { title, subtitle, category, img, description, published, author } =
    posts || {};

  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        {author ? <Author data={author}></Author> : <></>}
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          {title || "No title"}
        </h1>
        <p className="subtitle text-gray-500  text-xl text-center">
          {subtitle || "No subtitle"}
        </p>

        <div className="py-10">
          <Image
            src={img || "/images/img1.png"}
            alt={id.toString()}
            width={900}
            height={600}
          ></Image>
        </div>

        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>{description || "No description"}</p>
        </div>
      </div>

      <Related></Related>
    </section>
  );
};

export default PostById;
