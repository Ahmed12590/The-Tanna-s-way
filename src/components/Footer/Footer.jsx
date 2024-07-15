import "./style.css";
import { NavLink } from "react-router-dom";
import Image from "./img/image-29 1.png";
import fb from "./img/facebook.svg";
import instagram from "./img/instagram.svg.svg";
import twitter from "./img/twitter.svg.svg";
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
          <Col sm={12} md={12} lg={3}>
            <img src={Image} alt="footer logo" />
          </Col>

          <Col sm={12} md={12} lg={3}>
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
          </Col>

          <Col sm={12} md={12} lg={3}>
            <h4 className="head">Social Links </h4>
            <div className="social-parent">
              <div className="social-links">
                <img src={fb} alt="facebook.svg" />
              </div>
              <div className="social-text">
                <div>Lorem Ipsum</div>
              </div>
            </div>
            <div className="social-parent-instagram">
              <div className="social-instagram">
                <img src={instagram} alt="instagram.svg.svg" />
              </div>
              <div className="social-text">
                <div>Lorem Ipsum</div>
              </div>
            </div>
            <div className="social-parent-twitter">
              <div className="social-twitter">
                <img src={twitter} alt="twitter.svg.svg" />
              </div>
              <div className="social-text">
                <div>Lorem Ipsum</div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={12} lg={3}>
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
                <div>Lorem Ipsum</div>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
