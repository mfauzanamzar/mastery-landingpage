import React from "react";
import "./SliderTwo.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Carousel from "react-grid-carousel";

const SliderTwo = () => {
  return (
    <div className="slidertwo">
      
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
      <Carousel cols={2} rows={1} gap={10}
       responsiveLayout={[
          {
            breakpoint: 500,
            cols: 2
          }
        ]}
        mobileBreakpoint={0}>
          <Carousel.Item>
          <div className="image">
          <img
            className="image-slider2"
            src="/images/picture.png"
            alt="picture"
          />
          <div className="overlay">
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img
            className="image-slider2"
            src="/images/picture2.png"
            alt="picture"
          />
            <div className="overlay">
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
            </div>
          
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img
            className="image-slider2"
            src="/images/picture2.png"
            alt="picture"
          />
            <div className="overlay">
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
            </div>
          
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img
            className="image-slider2"
            src="/images/picture2.png"
            alt="picture"
          />
            <div className="overlay">
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
            </div>
          
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img
            className="image-slider2"
            src="/images/picture2.png"
            alt="picture"
          />
            <div className="overlay">
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
            </div>
          
          </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderTwo;
