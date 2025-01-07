import React from 'react';
import * as Bs from 'react-bootstrap';
import './landingCardMobile.scss';
import { LandingCard } from '../../../data/interfaces/landing-card/LandingCard';

type Props = {
  landingCard: LandingCard;
};

const LandingCardMobile: React.FC<Props> = ({ landingCard }) => {
  return (
    <Bs.Row data-testid="landing-card-mobile">
      <Bs.Col>
        <h1 data-testid="landing-title-mobile" className="text-center my-3">
          {landingCard.title}
        </h1>
        <Bs.Image
          fluid
          data-testid="landing-image-mobile"
          src={landingCard.image.data.attributes.url}
          className="landing-image-mobile"
        />
      </Bs.Col>
    </Bs.Row>
  );
};

export default LandingCardMobile;
