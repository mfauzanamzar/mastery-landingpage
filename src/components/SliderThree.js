import React, { useState } from "react";
import "./SliderThree.css";
import "../css/style.css";
import "../css/custom.css";
import "../css/animate.css";
import "../css/magnific-popup.css";
import "../css/font-icons.css"
import "../css/responsive-2.css"
import Image from "../data/picture";
import { Modal } from "./Modal";

const SliderThree = () => {
  const [showModal, setShowModal] = useState(true);
  const toTop = () => {
    window.scrollTo({ top: 0,
      behavior: 'smooth'})
  }

  return (
    <div className="sliderthree">
      <div class="container-fluid nopadding popular-coaching-grid">
        <h2>Popular Coaching Program dolor sit amet consectetur.</h2>
        <div
          id="portfolio"
          class="portfolio grid-container portfolio-3 portfolio-nomargin clearfix"
        >
          {Image.map((pic) => (
            <a
              href="#"
              class="portfolio-item"
              data-toggle="modal"
              data-target="#myModal"
            >
              <div class="portfolio-image">
                <img src={pic.image} />
                <div class="portfolio-overlay">
                  <div class="portfolio-desc">
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>
                      consectetur adipiscing elit maecenas varius tortor nibh
                      sit amet tempor nibh finibus et…
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              <i class="icon-angle-left"></i>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1 <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              5
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="icon-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div onClick={toTop} id="gotoTop" class="icon-angle-up"></div>
    </div>
  );
};

export default SliderThree;
