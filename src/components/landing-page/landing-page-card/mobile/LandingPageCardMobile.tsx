import React from 'react';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import { Col, Row, Image } from 'react-bootstrap';

type Props = {
  landingCard: LandingImage;
};

const LandingPageCardMobile: React.FC<Props> = ({ landingCard }) => {
  return (
    <Row className="mt-3" data-testid="landing-card-mobile">
      <Col>
        <div className="text-center">
          <h1 data-testid="landing-card-title" className="fs-1 fw-bold  mb-3">
            {landingCard.title}
          </h1>
          <h5 data-testid="landing-card-sub-title" className=" mb-3">
            {landingCard.subTitle}
          </h5>
          <Image
            fluid
            data-testid="landing-image-mobile"
            src={landingCard.image.data.attributes.url}
            className="rounded-4"
          />
        </div>
      </Col>
    </Row>
  );
};

export default LandingPageCardMobile;
