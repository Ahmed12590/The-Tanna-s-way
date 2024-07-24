import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <section className="Newsletter">
        <div className="Newsletter-background">
          <div className="Newsletter-col">
            <h1 className="Newsletter-heading">Subscribe Our Newsletter</h1>
            <p className="Newsletter-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              praesent duis elementum eu risus nec.{" "}
            </p>

            <form action="">
              <div
                className="mb-3 text-center d-flex align-items-center justify-content-center position-relative"
                style={{ maxWidth: "39.5625rem", margin: "auto" }}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Adress"
                />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="box-sec">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6} className="contact-col">
              <div className="contact-background">
                <div className="contact-box"></div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={6} className="form-col">
              <div>
                <h1 className="form-heading">Get in Touch</h1>
              </div>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="form-group">
                  <button type="submit">Send</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
