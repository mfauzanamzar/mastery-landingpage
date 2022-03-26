import React from "react";
import "./SliderOne.css";
import "./Responsive.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SliderOne = () => {
  const options = {
    loop: true,
    items: 1,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        stagePadding: 60,
        margin: 50,
      },
      500: {
        stagePadding: 150,
        margin: 50,
      },
      600: {
        stagePadding: 150,
        margin: 50,
      },
    },
  };
  return (
    <div className="slider-element coaching-main-slider">
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item">
          <a href="#">
            <img src="images/slider-1.png" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img src="images/slider-2.png" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img src="images/slider-3.png" />
          </a>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default SliderOne;
