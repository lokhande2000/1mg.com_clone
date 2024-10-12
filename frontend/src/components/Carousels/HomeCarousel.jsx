import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";
import banner7 from "../../assets/banner/banner7.png";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // Enables infinite scrolling
        autoplay={{
          delay: 4000,
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
