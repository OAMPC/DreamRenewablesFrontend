import React from 'react';
import { VideoSection } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import './landingPageVideoSection.scss';
import { Col, Row } from 'react-bootstrap';

type Props = {
  videoSection: VideoSection;
};

const LandingPageVideoSection: React.FC<Props> = ({ videoSection }) => {
  return (
    <div data-testid="landing-video-section">
      <Row>
        <Col className="text-center">
          <h2 className="fs-1 fw-bold">{videoSection.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="fs-4">{videoSection.subTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center video-container">
          <iframe
            className="video-section-video"
            width="1280"
            src={videoSection.videoLink}
            title="DREAM RENEWABLES 2020"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPageVideoSection;
