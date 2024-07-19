import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import star from "../Category/img/5star.png";
const Ebook = () => {
  return (
    <main className="ebook">
      <section className="ebook-section">
        <h2 className="ebook-banner-heading">E-book Banner</h2>
      </section>

      <section className="ebook-heading-section">
        <h2 className="ebook-heading">E-BOOKS</h2>
      </section>
      <section className="background-color">
        <Container fluid className="Ebook-page-container">
          <Row>
            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">
                      Art and Music Scene
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">
                      Educational Pioneers
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">
                      Religious Heritage
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">
                      Literary Contributions
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">Fashion and Style</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">
                      Environmental Stewardship
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-books-section">
        <h2 className="featured-hea">Featured Books</h2>
        <div className="featured-books-wrapper">

          <div className="featured-books-container">
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
          </div>

          <div className="featured-books-container">
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
          </div>

          <div className="featured-books-container">
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
          </div>

          <div className="featured-books-container">
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
          </div>

          <div className="featured-books-container">
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
          </div>

        </div>
      </section>
    </main>
  );
};

export default Ebook;
