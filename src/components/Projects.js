import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg8 from "../assets/img/project-img8.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Muzawed",
      description: "Full Stack Web Platform",
      imgUrl: projImg6,
    },
    {
      title: "3D Learnland Island",
      description: "React & 3D Interactive Experience",
      imgUrl: projImg4,
    },
    {
      title: "GroupBuy",
      description: "E-Commerce / Group Buying Platform",
      imgUrl: projImg8,
    },
    {
      title: "RealEstate",
      description: "Real Estate Web Application",
      imgUrl: projImg2,
    },
    {
      title: "Emtathel",
      description: "Web Application",
      imgUrl: projImg3,
    },
  ];

  const projectSlides = [];

for (let i = 0; i < projects.length; i += 3) {
  const slide = [];

  for (let j = 0; j < 3; j++) {
    slide.push(projects[(i + j) % projects.length]);
  }

  projectSlides.push(slide);
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>

            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__bounce"
                      : ""
                  }
                >
                  <div className="projects-heading">
                    <h2>Projects</h2>

                    <p>
                      Some of my recent projects
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>

            {/* Projects Slider */}
            <div className="projects-carousel-wrapper">

              <Carousel
                className="experience-carousel projects-carousel"
                interval={null}
                controls={false}
                indicators={true}
              >

                {projectSlides.map((slide, slideIndex) => (
<Carousel.Item key={slideIndex}>
  <Row>
    {slide.map((project, index) => (
      <ProjectCard
        key={`${slideIndex}-${index}`}
        {...project}
      />
    ))}
  </Row>
</Carousel.Item>
))}
</Carousel>
            </div>

          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Description"
      />

    </section>
  );
};