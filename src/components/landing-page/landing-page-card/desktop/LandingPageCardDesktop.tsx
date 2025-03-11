import React from 'react';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import { Col, Row } from 'react-bootstrap';
import styles from './landingPageCardDesktop.module.scss';

type Props = {
  landingImage: LandingImage;
};

const LandingPageCardDesktop: React.FC<Props> = ({ landingImage }) => {
  const landingCardBackgroundUrl = {
    backgroundImage: `url(${landingImage.image.data.attributes.url})`,
  };

  return (
    <Row data-testid="landing-page-card-desktop">
      <Col className="d-flex justify-content-center">
        <div
          className={`${styles.landingCard} d-flex align-items-end mt-3`}
          style={landingCardBackgroundUrl}
        >
          <div className={styles.landingCardTitleWrapper}>
            <h1
              data-testid="landing-card-title"
              className={`${styles.landingCardTitle} text-white fw-bold text-wrap`}
            >
              {landingImage.title}
            </h1>
            <h2
              data-testid="landing-card-sub-title"
              className={`${styles.landingCardSubTitle} fs-3 text-white text-start text-wrap`}
            >
              {landingImage.subTitle}
            </h2>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LandingPageCardDesktop;
