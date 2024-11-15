import React from 'react';
import * as Bs from 'react-bootstrap';
import { OurValuesSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import './ourMissionVisionAndValuesPageValuesSection.scss';

type Props = {
  ourValuesSection: OurValuesSection;
};

const OurMissionVisionAndValuesPageValuesSection: React.FC<Props> = ({
  ourValuesSection,
}) => {
  return (
    <div className="our-values-section" data-testid="our-values-section">
      <Bs.Row className="mt-4 mt-lg-5">
        <Bs.Col lg={{ span: 3, offset: 3 }} className="mt-md-5">
          <Bs.Row className="mb-3">
            <Bs.Col className="d-flex justify-content-center justify-content-lg-start">
              <h2
                data-testid="our-values-section-title"
                className="fs-1 fw-bold"
              >
                <Bs.Image
                  className="me-3"
                  fluid
                  data-testid="our-values-section-title-icon"
                  src={ourValuesSection.titleIcon.data.attributes.url}
                  alt={
                    ourValuesSection.titleIcon.data.attributes.alternativeText
                  }
                />
                {ourValuesSection.title}
              </h2>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col>
              {ourValuesSection.ourValuesEntries.map((entry) => (
                <p
                  className="fs-3 text-center text-lg-start"
                  data-testid="our-values-section-description"
                >
                  {entry.valueEntry}
                </p>
              ))}
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col lg="4" className="mt-3 d-flex justify-content-center">
          <Bs.Image
            data-testid="our-values-section-image"
            className="our-values-section-image"
            fluid
            src={ourValuesSection.sectionImage.data.attributes.url}
            alt={ourValuesSection.sectionImage.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurMissionVisionAndValuesPageValuesSection;
