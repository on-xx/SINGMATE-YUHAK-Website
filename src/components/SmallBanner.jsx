import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SmallBanner = () => {
  return (
    <Swiper
      className="small-banner container"
      modules={[Autoplay, Navigation, Pagination]}
      // pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      speed={1200}
      // style={{
      //     "--swiper-pagination-color": "white",
      //     "--swiper-pagination-bullet-inactive-color": "gray",
      //     "--swiper-pagination-bullet-inactive-opacity": "0.8",
      // }}
    >
      <SwiperSlide className="small-banner-slide">
        <img
          className="banner-img"
          src="../img/small-banner.jpg"
          alt="main-banner-1"
        />
      </SwiperSlide>
      <SwiperSlide className="small-banner-slide">
        <img
          className="banner-img"
          src="../img/small-banner-2.jpg"
          alt="main-banner-1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SmallBanner;
