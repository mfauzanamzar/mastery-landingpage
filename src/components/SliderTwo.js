import React from "react";
import "./SliderTwo.css";
import "../css/responsive-2.css";
import "../css/font-icons.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SliderTwo = () => {
  return (
    <div className="slidertwo">
      <div className="row">
        <div className="col-md-5">
          <div class="popular-coaching-text">
            <h2>
              Popular Coaching Program dolor sit amet consectetur adipiscing
              elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet con sectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </p>
            <p>Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.</p>
          </div>
        </div>

        <div className="col-md-7">
          <div className="popular-coaching-carousel">
            <OwlCarousel
              className="owl-theme"
              loop
              items={2}
              margin={30}
              nav
              dots={false}
              navText={[
                '<i class="icon-line-arrow-left"></i>',
                '<i class="icon-line-arrow-right"></i>',
              ]}
            >
              <a href="#">
                <div class="popular-coaching-wrap">
                  <img src="images/popular-1.png" class="coaching-image" />
                  <div class="coaching-description">
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>
                      consectetur adipiscing elit maecenas varius tortor nibh
                      sit amet tempor nibh finibus et…
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="popular-coaching-wrap">
                  <img src="images/popular-2.png" class="coaching-image" />
                  <div class="coaching-description">
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>
                      consectetur adipiscing elit maecenas varius tortor nibh
                      sit amet tempor nibh finibus et…
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="popular-coaching-wrap">
                  <img src="images/popular-1.png" class="coaching-image" />
                  <div class="coaching-description">
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>
                      consectetur adipiscing elit maecenas varius tortor nibh
                      sit amet tempor nibh finibus et…
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="popular-coaching-wrap">
                  <img src="images/popular-2.png" class="coaching-image" />
                  <div class="coaching-description">
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>
                      consectetur adipiscing elit maecenas varius tortor nibh
                      sit amet tempor nibh finibus et…
                    </p>
                  </div>
                </div>
              </a>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
