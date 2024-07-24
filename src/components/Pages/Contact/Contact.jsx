import ContactForm from "../../ContactFrom/ContactForm";
import "./style.css";
const Contact = () => {
  return (
    <main className="Contact">
      <section className="main-contact-section">
        <h1 className="contact-banner-heading">Contact us  </h1>
      </section>

      <ContactForm />
    </main>
  );
};

export default Contact;
