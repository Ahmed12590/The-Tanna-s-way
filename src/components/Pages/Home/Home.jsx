import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./img/Group 74.png";
import podcast from "./img/podcast img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContactForm from "../../ContactFrom/ContactForm";
import Banner from "../../Banner/Banner";
const Home = () => {
  return (
    <main className="home">
      <Banner bannerTxt={`Banner Design`} />

      <section className="second-section">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6} className="about-image">
              <img src={Image} alt="Group 74" className="img-fluid" />
            </Col>

            <Col xs={12} md={12} lg={6}>
              <h1 className="second-heading">About us </h1>
              <p className="second-para">
                Arizona History, the Okemah Community – a reflection on years
                past, which records the history and rich culture of an
                African-American community in South East Phoenix. This record is
                designed to amplify the historical understanding of life in this
                small community. Okemah was a fascinating community in which to
                live and grow. It was indeed a unique community where honest,
                hard-working men were proud to be their brother’s keeper. Women
                were respected and demonstrated a sense of pride in the care of
                their homes and children. Children were loved and nurtured by
                family, and the community willingly served as their extended
                family. The community valued respect for self and others and
                held in high esteem the desire for academic pursuit. These
                values, taught at an early age, were the essence of its vision
                of a better brighter future for its youth. We retained many
                values from preserving Okemah’s history. As we read about those
                who lived there, we share some of their experiences and learn
                from their mistakes as we look to the future. Knowledge of a
                productive history helps us to understand where we have been,
                value where we are, and recognize the need to continue to grow.
                A profound debt of gratitude is acknowledged here to all who
                have aided in the preparation of this brief, yet important
                chapter of Arizona history.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            <h1 className="third-heading">Blog & News</h1>
            <p className="third-para">
              Discover the Latest News, Events, and Community Highlights
            </p>
          </div>
        </Container>
      </section>

      <section className="box-sec">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="blog-wrapper">
                <div className="box-col"></div>
                <div className="blog-body ms-3">
                  <small className="blog-title">Jun 1, 2024</small>
                  <p className="blog-desc">Discovering Okemah’s Roots</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Ebook-wrapper">
        <Container fluid>
          <div>
            <h1 className="Ebook-title">EBOOKS</h1>
          </div>
          <Row>
            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="PodCast-Episodse">
        <h2 className="podcast-heading">Podcast Episodes</h2>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="podcast-wrapper">
              <img src={podcast} alt="img/podcast img.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="podcast-wrapper">
              <img src={podcast} alt="img/podcast img.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="Tanna-Store">
        <Container fluid>
          <h2 className="tanna-title">Tanna’s Store</h2>
          <Row>
            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="tannas-wrapper-box">
                <div className="Tannas-box">
                  <div className="Ebook-text">
                    <p className="tannas-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>


            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-wrapper-box">
                <div className="Ebook-box">
                  <div className="Ebook-text">
                    <p className="Ebook-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ContactForm />
    </main>
  );
};

export default Home;
