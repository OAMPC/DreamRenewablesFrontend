import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { LandingCard } from '../../../data/interfaces/landing-card/LandingCard';
import styles from './landingCardDesktop.module.scss';

type Props = {
  landingCard: LandingCard;
};

const LandingCardDesktop: React.FC<Props> = ({ landingCard }) => {
  const landingCardBackgroundUrl = {
    backgroundImage: `url(${landingCard.image.data.attributes.url})`,
  };

  return (
    <Row data-testid="landing-card-desktop">
      <Col className="d-flex justify-content-center">
        <div
          className={`${styles.landingCard} d-flex align-items-center justify-content-start mt-3`}
          style={landingCardBackgroundUrl}
          data-testid="landing-image-desktop"
        >
          <h1
            data-testid="landing-title-desktop"
            className="text-white fw-bold ms-5"
          >
            {landingCard.title}
          </h1>
        </div>
      </Col>
    </Row>
  );
};

export default LandingCardDesktop;
