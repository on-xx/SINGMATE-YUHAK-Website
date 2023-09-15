import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainBanner = () => {
  return (
    <Swiper
      className="main-banner"
      modules={[Autoplay, Navigation, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      speed={1200}
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "gray",
        "--swiper-pagination-bullet-inactive-opacity": "0.8",
      }}
    >
      <SwiperSlide className="main-banner-slide">
        <Link to="/visitform">
          <img
            className="banner-img"
            src="../img/main-banner-2.jpg"
            alt="main-banner-1"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="main-banner-slide">
        <Link to="/visitform">
          <img
            className="banner-img"
            src="../img/main-banner-1.png"
            alt="main-banner-1"
          />
        </Link>
      </SwiperSlide>
      {/* <SwiperSlide className='main-banner-slide'>
                <img className='banner-img' src="../img/main-banner-1.jpg" alt="main-banner-1" />
            </SwiperSlide>
            <SwiperSlide className='main-banner-slide'>
                <img className='banner-img' src="../img/main-banner-1.jpg" alt="main-banner-1" />
            </SwiperSlide>
            <SwiperSlide className='main-banner-slide'>
                <img className='banner-img' src="../img/main-banner-1.jpg" alt="main-banner-1" />
            </SwiperSlide> */}
    </Swiper>
  );
};

export default MainBanner;
