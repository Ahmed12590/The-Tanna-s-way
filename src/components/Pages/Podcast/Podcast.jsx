import "./style.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "./img/podcasteposide.png";
import mic from "./img/mic.svg";
import volume from "./img/volume2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Podcast = () => {
  return (
    <main className="podcast">
      <section className="podcast-section">
        <h1 className="poscast-banner-heading">Podcast Episodes</h1>
      </section>

      <section className="PodCast-Episodse">
        <h2 className="podcast-page-heading">PodCast Episodse</h2>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="podcast-wrapper">
              <img src={image} alt="img/podcasteposide.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="podcast-wrapper">
              <img src={image} alt="img/podcasteposide.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="voice-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image-parent">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <img src={mic} alt="img/mic.svg" className="d-block" />
                <div className="audio-txt-wrapper">
                  <h3 className="text-white">Interview</h3>
                  <p className="text-white">For Job Holder</p>
                </div>
              </div>
              <div className="volume-parent">
                <span className="span-text">25:00</span>
                <img src={volume} alt="img/volume2.svg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-parent">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <img src={mic} alt="img/mic.svg" className="d-block" />
                <div className="audio-txt-wrapper">
                  <h3 className="text-white">Interview</h3>
                  <p className="text-white">For Job Holder</p>
                </div>
              </div>
              <div className="volume-parent">
                <span className="span-text">25:00</span>
                <img src={volume} alt="img/volume2.svg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-parent">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <img src={mic} alt="img/mic.svg" className="d-block" />
                <div className="audio-txt-wrapper">
                  <h3 className="text-white">Interview</h3>
                  <p className="text-white">For Job Holder</p>
                </div>
              </div>
              <div className="volume-parent">
                <span className="span-text">25:00</span>
                <img src={volume} alt="img/volume2.svg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-parent">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <img src={mic} alt="img/mic.svg" className="d-block" />
                <div className="audio-txt-wrapper">
                  <h3 className="text-white">Interview</h3>
                  <p className="text-white">For Job Holder</p>
                </div>
              </div>
              <div className="volume-parent">
                <span className="span-text">25:00</span>
                <img src={volume} alt="img/volume2.svg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-parent">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <img src={mic} alt="img/mic.svg" className="d-block" />
                <div className="audio-txt-wrapper">
                  <h3 className="text-white">Interview</h3>
                  <p className="text-white">For Job Holder</p>
                </div>
              </div>
              <div className="volume-parent">
                <span className="span-text">25:00</span>
                <img src={volume} alt="img/volume2.svg" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="podcast-categories">
        <h2 className="cat-head-txt">Listen Change Your Life</h2>

        <Container fluid>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">News and Politics</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">News and Politics</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">Business</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">Technology</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">Comedy</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="pod-cat-wrapper">
                <div className="pod-video"></div>

                <div className="pod-title-wrapper">
                  <small className="pod-title-small">Episod:01</small>
                  <p className="pod-title">True Crime</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Podcast;
