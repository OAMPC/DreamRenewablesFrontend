import React from 'react';
import * as Bs from 'react-bootstrap';
import { OurMissionSection } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';

type Props = {
  ourMissionSection: OurMissionSection;
};

const OurMissionVisionAndValuesPageMissionSection: React.FC<Props> = ({
  ourMissionSection,
}) => {
  return (
    <div data-testid="our-mission-section">
      <Bs.Row>
        <Bs.Col>
          <Bs.Row>
            <Bs.Col>
              <Bs.Image
                fluid
                data-testid="our-mission-section-title-icon"
                src={ourMissionSection.titleIcon.data.attributes.url}
                alt={
                  ourMissionSection.titleIcon.data.attributes.alternativeText
                }
              />
            </Bs.Col>
            <Bs.Col>
              <h2
                data-testid="our-mission-section-title"
                className="fs-1 fw-bold"
              >
                {ourMissionSection.title}
              </h2>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col>
              <p data-testid="our-mission-section-description">
                {ourMissionSection.sectionDescription}
              </p>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col>
          <Bs.Image
            data-testid="our-mission-section-image"
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
