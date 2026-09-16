import { useState } from "react";
import { Col, Modal } from "react-bootstrap";

export const InfoCard = ({
  title,
  organization,
  period,
  shortDescription,
  description,
  technologies = [],
  icon = "💻",
  image,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Col sm={12} md={4} className="mb-4">
        <div
          className="info-card"
          onClick={() => setShowModal(true)}
        >
          {image ? (
            <div className="info-card-image">
              <img src={image} alt={title} />
            </div>
          ) : (
            <div className="info-card-icon">
              {icon}
            </div>
          )}

          <span className="info-card-period">
            {period}
          </span>

          <h3>{title}</h3>

          <h5>{organization}</h5>

          <p>{shortDescription}</p>

          <span className="info-card-link">
            View Details →
          </span>
        </div>
      </Col>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <div className="info-modal-content">

          <Modal.Header closeButton>
            <Modal.Title>
              {title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            {image && (
              <div className="info-modal-image">
                <img src={image} alt={title} />
              </div>
            )}

            <div className="info-modal-body">

              <span className="info-modal-period">
                {period}
              </span>

              <h4>{organization}</h4>

              <p className="info-description">
                {description}
              </p>

              {technologies.length > 0 && (
                <>
                  <h5>Technologies</h5>

                  <div className="info-technologies">
                    {technologies.map((technology, index) => (
                      <span key={index}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </>
              )}

            </div>

          </Modal.Body>

        </div>
      </Modal>
    </>
  );
};