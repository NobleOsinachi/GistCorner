"use client";
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

SwiperCore.use([Autoplay]);

const Section1 = () => {
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
            <SwiperSlide>
              <Slide />
            </SwiperSlide>

            <SwiperSlide>
              <Slide />
            </SwiperSlide>

            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </Swiper>

          {/* <Slide /> */}
        </div>
      </section>
    </>
  );
};

export default Section1;
