import "./style.css";
import { NavLink } from "react-router-dom";
import Image from "./img/image-29 1.png";
import svg from "./img/facebook.svg";
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
              <img src={svg} alt="facebook.svg" />
            </div>
            <div className="social-text">
              <div>Lorem Ipsum</div>
            </div>
            </div>
          </Col>

          <Col sm={12} md={12} lg={3}>
            <h4 className="head">Contact us </h4>
            <ul>
              <li className="contact-link">
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li className="footer-link">
                <NavLink to={`/`}>Home</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
