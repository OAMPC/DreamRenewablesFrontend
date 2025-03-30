import React from 'react';
import { LandingCard } from '../../../data/interfaces/landing-card/LandingCard';
import { Row, Col, Image } from 'react-bootstrap';

type Props = {
  landingCard: LandingCard;
};

const LandingCardMobile: React.FC<Props> = ({ landingCard }) => {
  return (
    <Row data-testid="landing-card-mobile">
      <Col>
        <h1
          data-testid="landing-title-mobile"
          className="fw-bolder text-center my-3"
        >
          {landingCard.title}
        </h1>
        <Image
          fluid
          data-testid="landing-image-mobile"
          src={landingCard.image.data.attributes.url}
          className="rounded-4"
        />
      </Col>
    </Row>
  );
};

export default LandingCardMobile;
