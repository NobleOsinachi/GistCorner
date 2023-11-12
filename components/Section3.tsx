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

const Section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-60">
      <h1 className="text-center text-4xl font-bold py-1">Most Popular </h1>

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
        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>

        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>

        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>

        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>

        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>

        <SwiperSlide>
          <PopularPost></PopularPost>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Section3;
