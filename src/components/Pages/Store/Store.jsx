import "./style.css";

import testimonialImg from "./img/testimonial-img.png";
import Ellipse from "./img/Ellipse 12.png";
import rating from "./img/star.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

import React from "react";

const Store = () => {
  return (
    <main>

<section className="store-section">
        <h1 className="store-banner-heading"> Store Banner </h1>
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
              <img src={rating } alt="star.svg" />
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
              <img src={rating } alt="star.svg" />
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
              <img src={rating } alt="star.svg" />
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
              <img src={rating } alt="star.svg" />
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
              <img src={rating } alt="star.svg" />
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
