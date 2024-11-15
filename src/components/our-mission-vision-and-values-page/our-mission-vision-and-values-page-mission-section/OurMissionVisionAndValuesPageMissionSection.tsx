import React from 'react';
import * as Bs from 'react-bootstrap';
import { OurMissionSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import './ourMissionVisionAndValuesPageMissionSection.scss';

type Props = {
  ourMissionSection: OurMissionSection;
};

const OurMissionVisionAndValuesPageMissionSection: React.FC<Props> = ({
  ourMissionSection,
}) => {
  return (
    <div data-testid="our-mission-section">
      <Bs.Row className="mt-4 mt-lg-5">
        <Bs.Col lg={{ span: 3, offset: 3 }} className="mt-md-5">
          <Bs.Row className="mb-3">
            <Bs.Col className="d-flex justify-content-center justify-content-lg-start">
              <h2
                data-testid="our-mission-section-title"
                className="fs-1 fw-bold"
              >
                <Bs.Image
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
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col>
              <p
                className="fs-3 text-center text-lg-start"
                data-testid="our-mission-section-description"
              >
                {ourMissionSection.sectionDescription}
              </p>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col lg="4" className="mt-3 d-flex justify-content-center">
          <Bs.Image
            data-testid="our-mission-section-image"
            className="our-mission-section-image"
            fluid
            src={ourMissionSection.sectionImage.data.attributes.url}
            alt={ourMissionSection.sectionImage.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageMissionSection;
