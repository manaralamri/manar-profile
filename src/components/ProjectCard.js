import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={12} md={4} className="mb-4">
      <div className="info-card project-card">

        <div className="info-card-image">
          <img src={imgUrl} alt={title} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="info-card-link">
          View Project →
        </span>

      </div>
    </Col>
  );
};