import "./style.css";
import { NavLink } from "react-router-dom";
import Image from "./img/image-29 1.png";
import youtube from "./img/youtube.svg";
import tiktok from "./img/tiktok.svg";
import pinterest from "./img/pinterest.svg";
import location from "./img/location.svg";
import email from "./img/email.svg";
import phone from "./img/phone.svg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="footer-logo-wrapper">
              <img src={Image} alt="footer logo" />
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="footer-head-wrapper mt-3">
              <h4 className="head">Our Pages </h4>
              <ul>
                <li className="footer-link">
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>About us </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>E-Books</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>Podcast Episodes</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>Blog & News</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>Contact us </NavLink>
                </li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="mt-3">
              <h4 className="head">Social Links </h4>
              <a
                href="https://www.youtube.com/channel/UC0YrFuHfnTzcfOw-ASpcy0g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-parent">
                  <div className="social-links">
                    <img src={youtube} alt="facebook.svg" />
                  </div>
                  <div className="social-text">
                    <div>Youtube</div>
                  </div>
                </div>
              </a>

              <div className="social-parent-tiktok">
                <div className="social-tiktok">
                  <a
                    href="https://www.tiktok.com/@thetannaway"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tiktok} alt="tiktok.svg" />
                  </a>
                </div>
                <div className="social-text">
                  <a
                    href="https://www.tiktok.com/@thetannaway"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Tiktok</div>
                  </a>
                </div>
              </div>

              <div className="social-parent-pinterest">
                <div className="social-pinterest">
                  <a
                    href="https://www.pinterest.com/thetannaway/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pinterest} alt="pinterest.svg" />
                  </a>
                </div>
                <div className="social-text">
                  <a
                    href="https://www.pinterest.com/thetannaway/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Pinterest</div>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="mt-3">
              <h4 className="head">Contact us </h4>
              <div className="contact-parent">
                <div className="contact-location">
                  <img src={location} alt="location.svg" />
                </div>
                <div className="contact-location-text">
                  <div>Lorem Ipsum</div>
                </div>
              </div>
              <div className="contact-parent-email">
                <div className="contact-emial">
                  <img src={email} alt="email.svg" />
                </div>
                <div className="contact-email-text">
                  <div>thetannaway@gmail.com</div>
                </div>
              </div>
              <div className="contact-parent-phone">
                <div className="contact-phone">
                  <img src={phone} alt="phone.svg" />
                </div>
                <div className="contact-phone-text">
                  <div>+123 456 7890</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
