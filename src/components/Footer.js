import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Responsive.css";

const Footer = () => {
  return (
    <div className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-11">
						<p className="lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo, Vestibulum aliquam.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5">
						<div className="footer-about">
							<h2>Need help with anything?</h2>
							<p>Jl. Paus Dalam No. 37,Rawamangun, Pulo Gadung Indonesia, 13220</p>
							<p>021-4721536 mastery.maximus@gmail.com</p>
							<div className="footer-social">
								<a href="#" className="social-icon si-dark si-rounded si-facebook">
									<i class="icon-facebook"></i>
									<i class="icon-facebook"></i>
								</a>
								<a href="#" className="social-icon si-dark si-rounded si-instagram">
									<i class="icon-instagram"></i>
									<i class="icon-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-4">
								<div className="footer-menu no-tree">
									<a href="#">Why Mastery?</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="footer-menu">
									<h4>Features</h4>
									<ul>
										<li><a href="#">Teamwork</a></li>
										<li><a href="#">Project Management</a></li>
										<li><a href="#">By Industries</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-4">
								<div className="footer-menu no-tree">
									<a href="#">Pricing</a>
								</div>
							</div>
							<div className="col-md-12">
								<div className="footer-copyright">Copyright Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Maecenas varius tortor nibh. Maecenas varius tortor nibh ipsum dolor sit amet.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
};

export default Footer;
