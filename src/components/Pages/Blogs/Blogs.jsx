import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./style.css";

const Blogs = () => {
  return (
    <main className="blogs">
      <section className="blogs-news">
        <Container fluid>
          <Row>
            <Col sm={`12`} md={`12`} lg={`6`}>
              <NavLink to={`#`}>
                <div className="hero-wrapper"></div>
              </NavLink>
            </Col>

            <Col sm={`12`} md={`12`} lg={`6`}>
              <NavLink to={`#`}>
                <div className="second-hero"></div>
              </NavLink>
              <NavLink to={`#`}>
                <div className="second-hero"></div>
              </NavLink>
            </Col>

            <Col sm={`12`} md={`12`} lg={`6`}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <button className="btn-business">Bussiness</button>
                <small className="business-small">Jun 1, 2024</small>
              </div>
              <p className="business-txt">
                Discover the Latest News, Events, and Community Highlights
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-news">
        <h2 className="latest-head-txt">Latest News</h2>

        <Container fluid>
          <div className="row">
            <Col sm={12} md={12} lg={6}>
              <NavLink to={`#`}>
                <div className="latest-box-left"></div>
              </NavLink>

              <p className="latest-txt">
                Lorem ipsum dolor sit amet consectetur. Felis scelerisque neque
                lorem orci quis sodales amet. Vel fusce lorem bibendum et id
                pellentesque mauris. Faucibus purus in facilisi diam nisl dolor
                et ornare. Purus lectus mi vitae consequat ante nulla ac blandit
                tortor.Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                neque lorem orci quis sodales amet. Vel fusce lorem bibendum et
                id pellentesque mauris. Faucibus purus in facilisi diam nisl
                dolor et ornare. Purus lectus mi vitae consequat ante nulla ac
                blandit tortor.
              </p>
            </Col>

            <Col sm={12} md={12} lg={6}>
              <div className="latest-boxes-wrapper">
                <div className="boxes-sets">
                  <NavLink to={`#`} style={{ width: "100%" }}>
                    <div className="latest-box-right"></div>
                  </NavLink>

                  <NavLink to={`#`} style={{ width: "100%" }}>
                    <div className="latest-box-right"></div>
                  </NavLink>
                </div>

                <div className="boxes-sets">
                  <NavLink to={`#`} style={{ width: "100%" }}>
                    <div className="latest-box-right"></div>
                  </NavLink>

                  <NavLink to={`#`} style={{ width: "100%" }}>
                    <div className="latest-box-right"></div>
                  </NavLink>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </section>

      <section className="blog-listing">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} lg={12} xl={8}>
              <NavLink to={`#`}>
                <div className="featured-blog"></div>
              </NavLink>
            </Col>

            <Col sm={12} md={12} lg={12} xl={4}>
              <div className="blog-list-wrapper">
                <NavLink to={`#`}>
                  <div className="blog-img-wrap"></div>
                </NavLink>

                <div className="blog-txt-wrapper">
                  <button className="btn-business">Business</button>
                  <p className="blog-list-txt">
                    Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                    neque lorem orci quis sodales amet. Vel fusce lorem bibendum
                    et id pellentesque mauris. Faucibus purus in facilisi diam
                    nisl dolor et ornare. Purus lectus mi vitae consequat ante
                    nulla ac blandit tortor.Lorem{" "}
                  </p>
                </div>
              </div>
              <br />
              <div className="blog-list-wrapper">
                <NavLink to={`#`}>
                  <div className="blog-img-wrap"></div>
                </NavLink>

                <div className="blog-txt-wrapper">
                  <button className="btn-business">Travel</button>
                  <p className="blog-list-txt">
                    Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                    neque lorem orci quis sodales amet. Vel fusce lorem bibendum
                    et id pellentesque mauris. Faucibus purus in facilisi diam
                    nisl dolor et ornare. Purus lectus mi vitae consequat ante
                    nulla ac blandit tortor.Lorem{" "}
                  </p>
                </div>
              </div>
              <br />
              <div className="blog-list-wrapper">
                <NavLink to={`#`}>
                  <div className="blog-img-wrap"></div>
                </NavLink>

                <div className="blog-txt-wrapper">
                  <button className="btn-business">Food </button>
                  <p className="blog-list-txt">
                    Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                    neque lorem orci quis sodales amet. Vel fusce lorem bibendum
                    et id pellentesque mauris. Faucibus purus in facilisi diam
                    nisl dolor et ornare. Purus lectus mi vitae consequat ante
                    nulla ac blandit tortor.Lorem{" "}
                  </p>
                </div>
              </div>
              <br />
              <div className="blog-list-wrapper">
                <NavLink to={`#`}>
                  <div className="blog-img-wrap"></div>
                </NavLink>

                <div className="blog-txt-wrapper">
                  <button className="btn-business">Robot</button>
                  <p className="blog-list-txt">
                    Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                    neque lorem orci quis sodales amet. Vel fusce lorem bibendum
                    et id pellentesque mauris. Faucibus purus in facilisi diam
                    nisl dolor et ornare. Purus lectus mi vitae consequat ante
                    nulla ac blandit tortor.Lorem{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="background-color-wrapper"></section>

      <section className="news-slider">
        <Swiper
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="news-box-wrapper"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="news-box-wrapper"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="news-box-wrapper"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="news-box-wrapper"></div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="sec-background-color-wrapper"></section>




      <section className="last-news-grid">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>

            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>

            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <NavLink to={`#`}>
                <div className="news-box"></div>
              </NavLink>
            </Col>
            
            
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Blogs;
