import React from 'react';
import { OurVisionSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { Col, Row, Image } from 'react-bootstrap';

type Props = {
  ourVisionSection: OurVisionSection;
};

const OurMissionVisionAndValuesPageVisionSection: React.FC<Props> = ({
  ourVisionSection,
}) => {
  return (
    <div className="mb-5" data-testid="our-vision-section">
      <Row>
        <Col lg={{ span: 3, offset: 3 }} className="mt-md-5">
          <Row className="mb-3">
            <Col className="d-flex justify-content-center justify-content-lg-start">
              <h2
                data-testid="our-vision-section-title"
                className="fs-1 fw-bold"
              >
                <Image
                  className="me-3"
                  fluid
                  data-testid="our-vision-section-title-icon"
                  src={ourVisionSection.titleIcon.data.attributes.url}
                  alt={
                    ourVisionSection.titleIcon.data.attributes.alternativeText
                  }
                />
                {ourVisionSection.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className="fs-3 text-center text-lg-start"
                data-testid="our-vision-section-description"
              >
                {ourVisionSection.sectionDescription}
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg="4" className="mt-3 d-flex justify-content-center">
          <Image
            data-testid="our-vision-section-image"
            className="rounded-4"
            fluid
            src={ourVisionSection.sectionImage.data.attributes.url}
            alt={ourVisionSection.sectionImage.data.attributes.alternativeText}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageVisionSection;
