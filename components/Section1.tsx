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
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Spinner from "./Spinner";
import { getTrending } from "@/controllers/TrendingController";

SwiperCore.use([Autoplay]);

const Section1 = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getTrending();
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
    <>
      <section
        className="py-16"
        style={{
          background: "url('/images/banner.png') no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
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
            slidesPerView={1}
            loop={true}
            // onSlideChange={() => console.log("changed")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {!isLoading &&
              posts.map((value, index) => (
                <SwiperSlide key={index}>
                  <Slide data={value}></Slide>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* <Slide /> */}
        </div>
      </section>
    </>
  );
};

export default Section1;
