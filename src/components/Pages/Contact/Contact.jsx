import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <main className="Contact">
      <section className="main-contact-section">
        <h1 className="contact-banner-heading">CONTACT US </h1>
      </section>

      <section className="box-sec">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <div className="contact-background">
                <div className="contact-box"></div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={6} className="form-col">
            <div>
              <h1 className="form-heading">
              Get in Touch
              </h1>

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
    </main>
  );
};

export default Contact;
