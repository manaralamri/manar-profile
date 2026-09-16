import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
  };

  return (
    <Navbar
      expand="md"
      className={`portfolio-navbar ${scrolled ? "scrolled" : ""}`}
    >
<Container>

  {/* Logo */}
  <Navbar.Brand href="/" className="portfolio-logo">
    Manar
  </Navbar.Brand>

  {/* Mobile Menu Button */}
  <Navbar.Toggle
    aria-controls="portfolio-navbar-collapse"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </Navbar.Toggle>

  {/* Center Navigation */}
  <Navbar.Collapse id="portfolio-navbar-collapse">

    <Nav className="portfolio-nav-menu">
      {navLinks.map((link) => (
        <Nav.Link
          key={link.id}
          as={HashLink}
          smooth
          to={`#${link.id}`}
          className={`portfolio-nav-link ${
            activeLink === link.id ? "active" : ""
          }`}
          onClick={() => handleNavClick(link.id)}
        >
          {link.label}
        </Nav.Link>
      ))}
    </Nav>

    {/* Social Icons - Mobile */}
    <div className="navbar-social-icons mobile-social-icons">
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
        href="https://mail.google.com/mail/?view=cm&fs=1&to=manaralamre33@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>

  </Navbar.Collapse>

  {/* Social Icons - Desktop */}
  <div className="navbar-social-icons desktop-social-icons">
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
      href="https://mail.google.com/mail/?view=cm&fs=1&to=manaralamre33@gmail.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Email"
    >
      <FaEnvelope />
    </a>
  </div>

</Container>    </Navbar>
  );
};