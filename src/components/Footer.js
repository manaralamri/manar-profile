import { Col, Container, Row } from "react-bootstrap";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";


export const Footer = () => {
  const email = "manaralamre33@gmail.com";

  return (
    <footer className="footer">
      <Container>
<Row className="align-items-center">

  <Col sm={6}>
<div className="footer-logo">
  Manar
</div>  </Col>

  <Col sm={6} className="text-center text-sm-end">
<div className="social-icon">

  <a
    href="https://www.linkedin.com/in/manar-alamri1/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/ManarAlamri"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

</div>    
  </Col>

</Row>   
    <p className="footer-copyright">
      Copyright 2026. All Rights Reserved
    </p>


</Container>
    </footer>
  );
};