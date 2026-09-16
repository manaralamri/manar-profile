import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: 'Python', image: meter1 },
    { name: 'Django', image: meter2 },
    { name: 'Django REST Framework', image: meter3 },
    { name: 'React.js', image: meter1 },
    { name: 'PostgreSQL', image: meter2 },
    { name: 'MySQL', image: meter3 },
    { name: 'Docker', image: meter1 },
    { name: 'Redis', image: meter2 },
    { name: 'Celery', image: meter3 },
    { name: 'Git & GitHub', image: meter1 },
    { name: 'CI/CD', image: meter2 },
    { name: 'Deployment', image: meter3 },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>

            <div className="skill-bx">

              <h2>Skills</h2>

              <p>
                Here are the technical skills I bring to the table
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                showDots={false}
                swipeable={true}
                draggable={true}
                className="skill-slider"
              >

                {skills.map((skill, index) => (
                  <div className="item" key={index}>

                    <img
                      src={skill.image}
                      alt={skill.name}
                    />

                    <h5>{skill.name}</h5>

                  </div>
                ))}

              </Carousel>

            </div>

          </Col>
        </Row>
      </Container>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background decoration"
      />

    </section>
  );
};