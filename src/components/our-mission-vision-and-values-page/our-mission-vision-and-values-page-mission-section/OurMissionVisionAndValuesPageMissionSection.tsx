import React from 'react';
import { OurMissionSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { Row, Col, Image } from 'react-bootstrap';
import Markdown from '../../markdown/Markdown';

type Props = {
  ourMissionSection: OurMissionSection;
};

const OurMissionVisionAndValuesPageMissionSection: React.FC<Props> = ({
  ourMissionSection,
}) => {
  return (
    <div className="mb-5" data-testid="our-mission-section">
      <Row className="mt-4 mt-lg-5">
        <Col lg={{ span: 3, offset: 3 }} className="mt-md-5">
          <Row className="mb-3">
            <Col className="d-flex justify-content-center justify-content-lg-start">
              <h2
                data-testid="our-mission-section-title"
                className="fs-1 fw-bold"
              >
                <Image
                  className="me-3"
                  fluid
                  data-testid="our-mission-section-title-icon"
                  src={ourMissionSection.titleIcon.data.attributes.url}
                  alt={
                    ourMissionSection.titleIcon.data.attributes.alternativeText
                  }
                />
                {ourMissionSection.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="fs-3 text-center text-lg-start"
                data-testid="our-mission-section-description"
              >
                <Markdown rawMarkdown={ourMissionSection.sectionDescription} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="4" className="mt-3 d-flex justify-content-center">
          <Image
            data-testid="our-mission-section-image"
            className="rounded-4"
            fluid
            src={ourMissionSection.sectionImage.data.attributes.url}
            alt={ourMissionSection.sectionImage.data.attributes.alternativeText}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageMissionSection;
