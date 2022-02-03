import React from "react";
import "./SliderOne.css";
import "./Responsive.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderOne = () => {
  return (
    <div className="sliderone">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={400}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="first-banner">
            <img
              className="banner"
              src="/images/Banner2.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/images/Banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="banner last-banner"
            src="/images/Banner3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderOne;
