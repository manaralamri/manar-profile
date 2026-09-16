import { Container, Row, Carousel } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

import { InfoCard } from "./InfoCard";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      organization: "GOIT Company",
      period: "2025 – Present",
      shortDescription: "Backend-focused Full Stack Developer",
      description:
        "Worked on web applications and backend systems using Django and Django REST Framework, with a focus on API development, database integration, and scalable backend solutions.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Celery",
        "React",
        "Docker",
      ],
    },
    {
      title: "Web Developer",
      organization: "Freelance",
      period: "2024 – 2025",
      shortDescription: "Web Application Development",
      description:
        "Developed and customized web applications based on client requirements, working across backend and frontend technologies.",
      technologies: [
        "Python",
        "Django",
        "React",
        "JavaScript",
        "REST APIs",
        "MySQL",
      ],
    },
    {
      title: "Full Stack Development",
      organization: "Tuwaiq Academy",
      period: "2025",
      shortDescription: "Full Stack Django Bootcamp",
      description:
        "Completed an intensive Full Stack Development bootcamp focused on building modern web applications using Django, REST APIs, databases, and frontend technologies.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      title: "Software Tester",
      organization: "Bunayah",
      period: "2023 – 2024",
      shortDescription: "Web Application Testing & Quality Assurance",
      description:
        "Worked as a Software Tester at Bunayah, reviewing web applications and verifying that implemented features matched the required specifications. Tested new features, identified and documented bugs, and validated fixes to ensure the system worked as expected before release.",
      technologies: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Bug Reporting",
        "API Testing",
        "Postman",
        "Web Application Testing",
      ],
    },
  ];

  const experienceSlides = [];

  for (let i = 0; i < experiences.length; i += 3) {
    experienceSlides.push(experiences.slice(i, i + 3));
  }

  return (
    <section className="experience" id="experience">
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

              <div className="experience-heading">
                <h2>Experience</h2>

                <p>
                  My professional experience and development journey.
                </p>
              </div>


              {/* Desktop */}
              <div className="experience-desktop">

                <Carousel
                  className="experience-carousel"
                  interval={null}
                controls={false}
                    indicators={true}

                >

                  {experienceSlides.map((slide, slideIndex) => (
                    <Carousel.Item key={slideIndex}>

                      <Row>
                        {slide.map((experience, index) => (
                          <InfoCard
                            key={index}
                            {...experience}
                          />
                        ))}
                      </Row>

                    </Carousel.Item>
                  ))}

                </Carousel>

              </div>


              {/* Mobile */}
              <div className="experience-mobile">

                <Row>
                  {experiences.map((experience, index) => (
                    <InfoCard
                      key={index}
                      {...experience}
                    />
                  ))}
                </Row>

              </div>

            </div>
          )}
        </TrackVisibility>

      </Container>
    </section>
  );
};