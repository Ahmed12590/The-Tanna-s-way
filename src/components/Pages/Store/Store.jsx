import "./style.css";

import testimonialImg from "./img/testimonial-img.png";
import Ellipse from "./img/Ellipse 12.png";
import rating from "./img/star.svg";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `https://467d4c-d3.myshopify.com/api/2023-07/graphql.json`,
          {
            query: `{
                      products(first: 9 {
                      edges {
                          node {
                          id
                          title
                          description
                          images(first: 1) {
                              edges {
                              node {
                                  src
                                  altText
                              }
                              }
                          }
                          }
                      }
                      }
                  }
                  `,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Shopify-Storefront-Access-Token":
                "fc433cdedd9bcae53fe60446a688962e",
            },
          }
        );
        setProducts(response.data.data.products.edges);
        console.log(response.data.data.products.edges);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <main>
      <section className="store-section">
        <h1 className="store-banner-heading"> Store Banner </h1>
      </section>

      <section>
        <Container fluid>
          <div>
            <h1 className="store-third-heading">What's Trending Now?</h1>
          </div>
        </Container>
      </section>

      <section className="store-backgorund-color">
        <Container fluid>
          <Row>
            {products.map((product) => (
              <Col xs={12} md={12} lg={4} className="trending-col">
                <div className="store-trending-wrapper">
                  <div className="store-trending-col">
                    <img src={product.node.images.edges[0].node.src} alt={product.node.images.edges[0].node.altText || 'Product Image'}  style={{width:"100%"}}/>
                  </div>
                  <div className="trending-body ms-3"></div>
                </div>
              </Col>
            ))}
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="trending-col">
              <div className="store-trending-wrapper">
                <div className="store-trending-col"></div>
                <div className="trending-body ms-3"></div>
              </div>
            </Col>
          </Row>
          <div className="trending-btn-parent">
            <NavLink>
              <button className="trending-button">Load More</button>{" "}
            </NavLink>
          </div>
        </Container>
      </section>

      <section>
        <Container fluid>
          <div>
            <h1 className="category-heading">Shop By Category</h1>
          </div>
        </Container>
      </section>

      <section>
        <Container fluid className="category-section">
          <Row>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Metal Sign </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Hawaiian Shirt </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Hand Bag & wallets </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Sublimation </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">KId/Baby </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Decal & Stickers </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Tumbler</small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="store-category">
              <div className="store-Category-wrapper">
                <div className="store-Category-col"></div>
                <div className="trending-body ms-3">
                  <small className="trending-text">Hat & Caps </small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <div>
            <h1 className="Arrival-heading">Shop New Arrival</h1>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid className="Arrival-section">
          <Row>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-5">
              <div className="arrival-wrapper-box">
                <div className="arrival-box">
                  <div className="arrival-text">
                    <p className="arrival-price">$29.99</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="store-ads-section">
        <h1 className="ads-banner-heading"> Banner Ads Design </h1>
      </section>

      <section className="customer-reviews">
        <h2 className="customers-review’s-head-txt">Customers Review’s</h2>

        <Swiper
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <div className="tes-img-wrapper">
                <img src={Ellipse} alt="Ellipse 12.png" />
                <img
                  src={testimonialImg}
                  className="tes-img"
                  alt="testimonial image"
                />
              </div>

              <div className="btn-tes-wrapper">
                <button className="btn-testimonial">John David</button>
              </div>

              <div className="ratting-wrapper">
                <img src={rating} alt="star.svg" />
                <small className="ratting">5.0</small>
              </div>

              <div className="review-wrapper">
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur. Duis senectus
                  pellentesque non id nulla non aenean.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <div className="tes-img-wrapper">
                <img src={Ellipse} alt="Ellipse 12.png" />
                <img
                  src={testimonialImg}
                  className="tes-img"
                  alt="testimonial image"
                />
              </div>

              <div className="btn-tes-wrapper">
                <button className="btn-testimonial">John David</button>
              </div>

              <div className="ratting-wrapper">
                <img src={rating} alt="star.svg" />
                <small className="ratting">5.0</small>
              </div>

              <div className="review-wrapper">
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur. Duis senectus
                  pellentesque non id nulla non aenean.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <div className="tes-img-wrapper">
                <img src={Ellipse} alt="Ellipse 12.png" />
                <img
                  src={testimonialImg}
                  className="tes-img"
                  alt="testimonial image"
                />
              </div>

              <div className="btn-tes-wrapper">
                <button className="btn-testimonial">John David</button>
              </div>

              <div className="ratting-wrapper">
                <img src={rating} alt="star.svg" />
                <small className="ratting">5.0</small>
              </div>

              <div className="review-wrapper">
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur. Duis senectus
                  pellentesque non id nulla non aenean.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <div className="tes-img-wrapper">
                <img src={Ellipse} alt="Ellipse 12.png" />
                <img
                  src={testimonialImg}
                  className="tes-img"
                  alt="testimonial image"
                />
              </div>

              <div className="btn-tes-wrapper">
                <button className="btn-testimonial">John David</button>
              </div>

              <div className="ratting-wrapper">
                <img src={rating} alt="star.svg" />
                <small className="ratting">5.0</small>
              </div>

              <div className="review-wrapper">
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur. Duis senectus
                  pellentesque non id nulla non aenean.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <div className="tes-img-wrapper">
                <img src={Ellipse} alt="Ellipse 12.png" />
                <img
                  src={testimonialImg}
                  className="tes-img"
                  alt="testimonial image"
                />
              </div>

              <div className="btn-tes-wrapper">
                <button className="btn-testimonial">John David</button>
              </div>

              <div className="ratting-wrapper">
                <img src={rating} alt="star.svg" />
                <small className="ratting">5.0</small>
              </div>

              <div className="review-wrapper">
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur. Duis senectus
                  pellentesque non id nulla non aenean.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default Store;
