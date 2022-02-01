import React from "react";
import "./SliderTwo.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderTwo = () => {
  return (
    <div className="slidertwo">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>
          <div className="text-slider">
            <p className="heading-slider">
              Popular Coaching Program dolor sit amet consectetur adipiscing
              elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet con sectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </p>
            <p>Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="textoverlay">
            <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
            <p className="desc-overlay">
              consectetur adipiscing elit maecenas varius tortor nibh sit amet
              tempor nibh finibus et…
            </p>
          </div>

          <img
            className="image-slider2"
            src="/images/picture.png"
            alt="picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="textoverlay">
            <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
            <p className="desc-overlay">
              consectetur adipiscing elit maecenas varius tortor nibh sit amet
              tempor nibh finibus et…
            </p>
          </div>
          <img
            className="image-slider2"
            src="/images/picture2.png"
            alt="picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/picture.png" alt="picture" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/picture2.png" alt="picture" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTwo;
