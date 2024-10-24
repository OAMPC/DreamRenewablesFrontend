import React from 'react';
import { VideoSection } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './landingPageVideoSection.scss';

type Props = {
  videoSection: VideoSection;
};

const LandingPageVideoSection: React.FC<Props> = ({ videoSection }) => {
  return (
    <div data-testid="landing-video-section">
      <Bs.Row>
        <Bs.Col className="text-center">
          <h2 className="fs-1 fw-bold">{videoSection.title}</h2>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col className="text-center">
          <p className="fs-4">{videoSection.subTitle}</p>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col className="d-flex justify-content-center video-container">
          <iframe
            className="video-section-video"
            width="1280"
            src={videoSection.videoLink}
            title="DREAM RENEWABLES 2020"
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPageVideoSection;
