import React, { useState } from "react";
import "./SliderThree.css";
import Image from "../data/picture";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Modal } from "./Modal";
import Carousel from "react-grid-carousel";

const SliderThree = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="sliderthree">
      <div className="text-slider">
        <p className="heading-slider">
          Popular Coaching Program dolor sit amet consectetur.
        </p>
      </div>
      <Carousel showDots cols={3} rows={4} gap={0}>
        {Image.map((pic) => (
          <Carousel.Item>
            <div className="image">
              <img
                width="100%"
                className="image-slider"
                onClick={openModal}
                src={pic.image}
                alt="image"
              />
              <div className="overlay" onClick={openModal}>
                <div className="text" >
                  <p className="heading-overlay">Lorem ipsum dolor sit amet </p>
                  <p className="desc-overlay">consectetur adipiscing elit maecenas 
varius tortor nibh sit amet tempor 
nibh finibus et… </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SliderThree;
