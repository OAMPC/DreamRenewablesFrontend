import React from 'react';
import * as Bs from 'react-bootstrap';
import { LandingCard } from '../../../data/interfaces/landing-card/LandingCard';

type Props = {
  landingCard: LandingCard;
};

const LandingCardDesktop: React.FC<Props> = ({ landingCard }) => {
  const landingCardCardStyle = {
    backgroundImage: `url(${landingCard.image.data.attributes.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '75vw',
    borderRadius: '25px',
  };

  return (
    <Bs.Row data-testid="landing-card-desktop">
      <Bs.Col className="d-flex justify-content-center">
        <div
          className="d-flex align-items-center justify-content-start mt-3 landing-card"
          style={landingCardCardStyle}
          data-testid="landing-image-desktop"
        >
          <h1
            data-testid="landing-title-desktop"
            className="text-white fw-bold ms-5"
          >
            {landingCard.title}
          </h1>
        </div>
      </Bs.Col>
    </Bs.Row>
  );
};

export default LandingCardDesktop;
