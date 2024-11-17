import React from 'react';
import * as Bs from 'react-bootstrap';
import { OurVisionSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import './ourMissionVisionAndValuesPageVisionSection.scss';

type Props = {
  ourVisionSection: OurVisionSection;
};

const OurMissionVisionAndValuesPageVisionSection: React.FC<Props> = ({
  ourVisionSection,
}) => {
  return (
    <div className="our-vision-section" data-testid="our-vision-section">
      <Bs.Row className="mt-4 mt-lg-5">
        <Bs.Col lg={{ span: 3, offset: 3 }} className="mt-md-5">
          <Bs.Row className="mb-3">
            <Bs.Col className="d-flex justify-content-center justify-content-lg-start">
              <h2
                data-testid="our-vision-section-title"
                className="fs-1 fw-bold"
              >
                <Bs.Image
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
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col>
              <p
                className="fs-3 text-center text-lg-start"
                data-testid="our-vision-section-description"
              >
                {ourVisionSection.sectionDescription}
              </p>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col lg="4" className="mt-3 d-flex justify-content-center">
          <Bs.Image
            data-testid="our-vision-section-image"
            className="our-vision-section-image"
            fluid
            src={ourVisionSection.sectionImage.data.attributes.url}
            alt={ourVisionSection.sectionImage.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageVisionSection;
