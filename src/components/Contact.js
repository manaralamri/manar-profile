import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import cvFile from "../assets/pdf/Manar-Alamri-CV.pdf";

export const Contact = () => {
  const email = "manaralamre33@gmail.com";
  const whatsapp  = "966553764470";

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">

          <Col md={6}>
            <img src={contactImg} alt="Get in touch" />
          </Col>

          <Col md={6}>
            <div className="contact-content">

              <h2>Get In Touch</h2>

              <p>
                Have a project in mind or want to work together?
                Feel free to reach out.
              </p>

              <div className="contact-options">

                {/* Email */}
                {/* Email */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <div className="contact-option-icon">
                    ✉
                  </div>

                  <h4>Email</h4>
                  <span>Send me an email</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <div className="contact-option-icon">
                    💬
                  </div>

                  <h4>Message</h4>
                  <span>Let's talk</span>
                </a>

              </div>

              {/* CV */}
              <a
                href={cvFile}
                download="Manar-Alamri-CV.pdf"
                className="contact-cv-btn"
              >
                Download CV
              </a>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};