import "./style.css";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import star from "./img/5star.png";
import React from "react";

const Category = () => {
  return (
    <main>
      <section className="Category-section">
        <h1 className="Category-banner-heading"> Category Banner </h1>
      </section>

      <section>
        <Container fluid>
          <div className="T-Shirt-heading">
            <div className="T-Shirt-text">
              <h2>Hawaiin T-Shirt</h2>
              <small>What's Trending Now?</small>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={3} className="T-shirt-wrapper">
              <div className="T-shirt-Col">
                <div className="blog-body ms-3"></div>
              </div>
              <div className="main-parent">
                <h3 className="hawaiin-hea">Hawaiin T-Shirt</h3>
                <img src={star} alt="5star.png" />
                <div>
                <small className="hawaiin-text">
                  Lorem ipsum dolor sit amet consectetur. At a facilisi ipsum
                  ipsum eget ut sit viverra risus.
                </small>
                <h4 className="hawaiin-price">$24.99</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="T-shirt-wrapper">
              <div className="T-shirt-Col">
                <div className="blog-body ms-3"></div>
              </div>
              <div className="main-parent">
                <h3 className="hawaiin-hea">Hawaiin T-Shirt</h3>
                <img src={star} alt="5star.png" />
                <div>
                <small className="hawaiin-text">
                  Lorem ipsum dolor sit amet consectetur. At a facilisi ipsum
                  ipsum eget ut sit viverra risus.
                </small>
                <h4 className="hawaiin-price">$24.99</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="T-shirt-wrapper">
              <div className="T-shirt-Col">
                <div className="blog-body ms-3"></div>
              </div>
              <div className="main-parent">
                <h3 className="hawaiin-hea">Hawaiin T-Shirt</h3>
                <img src={star} alt="5star.png" />
                <div>
                <small className="hawaiin-text">
                  Lorem ipsum dolor sit amet consectetur. At a facilisi ipsum
                  ipsum eget ut sit viverra risus.
                </small>
                <h4 className="hawaiin-price">$24.99</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="T-shirt-wrapper">
              <div className="T-shirt-Col">
                <div className="blog-body ms-3"></div>
              </div>
              <div className="main-parent">
                <h3 className="hawaiin-hea">Hawaiin T-Shirt</h3>
                <img src={star} alt="5star.png" />
                <div>
                <small className="hawaiin-text">
                  Lorem ipsum dolor sit amet consectetur. At a facilisi ipsum
                  ipsum eget ut sit viverra risus.
                </small>
                <h4 className="hawaiin-price">$24.99</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Category;
