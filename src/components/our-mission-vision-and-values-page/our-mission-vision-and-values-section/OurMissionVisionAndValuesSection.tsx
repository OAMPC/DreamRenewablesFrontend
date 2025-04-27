import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Markdown from '../../markdown/Markdown';
import { OurMissionVisionAndValuesPageSection as IOurMissionVisionAndValuesPageSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';

type Props = {
  sectionData: IOurMissionVisionAndValuesPageSection;
};

const OurMissionVisionAndValuesPageSection: React.FC<Props> = ({
  sectionData,
}) => {
  return (
    <div className="mb-5" data-testid="omvvp-section">
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <h2 data-testid="omvvp-section-title" className="mt-3 fs-1 fw-bold">
            <Image
              className="me-3"
              fluid
              data-testid="omvvp-section-title-icon"
              src={sectionData.titleIcon.data.attributes.url}
              alt={sectionData.titleIcon.data.attributes.alternativeText}
            />
            {sectionData.title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center"
          xl={{ span: 6, offset: 3 }}
        >
          <div
            className="fs-3 text-center text-lg-start"
            data-testid="omvvp-section-description"
          >
            <Markdown rawMarkdown={sectionData.sectionDescription} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageSection;
