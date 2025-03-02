import React from 'react';
import { OurValuesSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { Row, Col, Image } from 'react-bootstrap';
import Markdown from '../../markdown/Markdown';

type Props = {
  ourValuesSection: OurValuesSection;
};

const OurMissionVisionAndValuesPageValuesSection: React.FC<Props> = ({
  ourValuesSection,
}) => {
  return (
    <div className="mb-5" data-testid="our-values-section">
      <Row>
        <Col className="d-flex justify-content-center">
          <h2
            data-testid="our-values-section-title"
            className="fs-1 fw-bold mb-3"
          >
            <Image
              className="me-3 mb-2"
              fluid
              data-testid="our-values-section-title-icon"
              src={ourValuesSection.titleIcon.data.attributes.url}
              alt={ourValuesSection.titleIcon.data.attributes.alternativeText}
            />
            {ourValuesSection.title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div
            className="fs-2 text-center text-lg-start"
            data-testid="our-values-section-description"
          >
            <Markdown rawMarkdown={ourValuesSection.ourValuesEntries} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageValuesSection;
