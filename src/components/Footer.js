import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Responsive.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
        tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo,
        Vestibulum aliquam.
      </p>
      <div>
        <div className="footer-col">
          <div className="col1">
            <p className="footer-heading">Need help with anything?</p>
            <p className="footer-addres">
              Jl. Paus Dalam No. 37,Rawamangun, Pulo Gadung Indonesia, 13220
            </p>
            <div>
              <p className="footer-addres">021-4721536</p>
              <p className="footer-addres">mastery.maximus@gmail.com</p>
            </div>

            <div className="footer-social">
              <a href="#"><FaFacebook color="black" size={45} /></a>
             
              <a href="#"> <FaInstagram color="black" size={45} /></a>
            </div>
          </div>
          <div className="container-col2">
            <div className="col2">
              <div className="item1">
                <p>Why Mastery?</p>
              </div>
              <div className="item2">
                <p>Features</p>
                <div className="item2-sub">
                  <p>Teamwork</p>
                  <p>Project Management</p>
                  <p>By Industries</p>
                </div>
              </div>
              <div className="item3">
                <p>Pricing</p>
              </div>
            </div>
            <div className="footer-bottom">
          <p className="copyright-text">
            Copyright Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas varius tortor nibh. Maecenas varius tortor nibh ipsum dolor
            sit amet.
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
