"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Post from "./Post";
import { Post as PostData } from "@/models/Post";
import { useEffect, useState } from "react";
// import { getPosts, getTrending } from "@/lib/getPosts";
import Error from "./Error";

import Slide from "./Slide";
// import Swiper from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopularPost from "./PopularPost";
import { getPopular } from "@/controllers/PopularController";
import Spinner from "./Spinner";
import CategoryPost from "./CategoryPost";
const Section4 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPopular();
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
    <section className="container mx-auto md:px-20 py-10    ">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className=" text-4xl font-bold py-12">Business </h1>
          <div className="flex flex-col gap-6">
            {posts[0] ? <CategoryPost data={posts[0]}></CategoryPost> : <></>}
            {posts[1] ? <CategoryPost data={posts[1]}></CategoryPost> : <></>}
            {posts[2] ? <CategoryPost data={posts[2]}></CategoryPost> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className=" text-4xl font-bold py-12">Travel </h1>
          <div className="flex flex-col gap-6">
            {posts[3] ? <CategoryPost data={posts[3]}></CategoryPost> : <></>}
            {posts[4] ? <CategoryPost data={posts[4]}></CategoryPost> : <></>}
            {posts[2] ? <CategoryPost data={posts[2]}></CategoryPost> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
