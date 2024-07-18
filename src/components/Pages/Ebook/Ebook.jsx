import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

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
                    <p className="Ebook-page-text-heading">Art and Music Scene</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">Educational Pioneers</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">Religious Heritage</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4} className="mt-5">
              <div className="Ebook-page-box">
                <div className="Ebook-page-box">
                  <div className="Ebook-text">
                    <p className="Ebook-page-text-heading">Literary Contributions</p>
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
                    <p className="Ebook-page-text-heading">Environmental Stewardship</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Ebook;
