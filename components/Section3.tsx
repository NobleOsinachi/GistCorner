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

const Section3 = () => {
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
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="text-center text-4xl font-bold py-12">Most Popular </h1>

      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={2}
        loop={true}
        // onSlideChange={() => console.log("changed")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <PopularPost data={post}></PopularPost>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;
