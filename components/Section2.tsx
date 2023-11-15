"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Post from "./Post";
import { Post as PostData } from "@/models/Post";

import { useEffect, useState } from "react";

import Spinner from "./Spinner";
import Error from "./Error";
import { getPosts } from "@/controllers/PostController";

const Section2 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError("Error fetching posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Spinner></Spinner>;

  if (isError) return <Error>{isError}</Error>;

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="text-center text-4xl font-bold py-12">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {!isLoading &&
          posts.map((value, index) => <Post data={value} key={index} />)}
      </div>
    </section>
  );
};

export default Section2;
