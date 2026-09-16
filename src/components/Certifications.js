import { Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

import { InfoCard } from "./InfoCard";

// import elevateImg from "../assets/img/certificates/elevate.png";
// import djangoImg from "../assets/img/certificates/full-stack-django.png";
// import restApiImg from "../assets/img/certificates/rest-api-django.png";

export const Certifications = () => {
  const certifications = [
    {
      title: "ELEVATE",
      organization: "SDAIA",
      period: "2024",
      shortDescription: "Professional training program",
      description:
        "Completed the ELEVATE program provided by SDAIA.",
      icon: "🏆",
      // image: elevateImg,
    },

    {
      title: "Full Stack Django",
      organization: "Tuwaiq Academy",
      period: "2025",
      shortDescription: "Full Stack Development Bootcamp",
      description:
        "Completed an intensive Full Stack Development bootcamp focused on building web applications using Django, REST APIs, databases, and frontend technologies.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      icon: "🏆",
      // image: djangoImg,
    },

    {
      title: "REST API with Python & Django",
      organization: "Tuwaiq Academy",
      period: "2025",
      shortDescription: "REST API Development",
      description:
        "Completed training focused on developing RESTful APIs using Python and Django.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST API",
      ],
      icon: "🏆",
      // image: restApiImg,
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn"
                  : ""
              }
            >
              <div className="certifications-heading">
                <h2>Certifications</h2>

                <p>
                  Certifications and professional training.
                </p>
              </div>

              <Row>
                {certifications.map((certification, index) => (
                  <InfoCard
                    key={index}
                    {...certification}
                  />
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};