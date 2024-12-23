import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./img/Group 74.png";
import Banner from "../../Banner/Banner";
const About = () => {
  return (
    <main className="About">
      <Banner bannerTxt={`About Banner`} />

      <section className="second-about-section">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <img src={Image} alt="Group 74" className="img-fluid" />
            </Col>







            <Col xs={12} md={12} lg={6}>
              <h1 className="second-about-heading">About us </h1>
              <p className="second-about-para">
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
    </main>
  );
};

export default About;
