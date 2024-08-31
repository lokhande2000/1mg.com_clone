import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../config/banner/banner1.jpg";
import banner2 from "../config/banner/banner2png.png";
import banner3 from "../config/banner/banner3.png";
import banner4 from "../config/banner/banner4png.png";
import banner5 from "../config/banner/banner5png.png";
import banner6 from "../config/banner/banner6png.png";
import banner7 from "../config/banner/banner7.png";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // Enables infinite scrolling
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true} // Adds navigation buttons (optional)
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner7} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeCarousel;
