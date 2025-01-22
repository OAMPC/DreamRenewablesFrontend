import React from 'react';
import { ImageButton } from '../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import { Row, Col } from 'react-bootstrap';
import styles from './aboutUsPageImageButton.module.scss';

type Props = {
  imageButtonData: ImageButton;
};

const AboutUsPageImageButton: React.FC<Props> = ({ imageButtonData }) => {
  const aboutUsPageImageBackgroundUrlStyle = {
    backgroundImage: `url(${imageButtonData.image.data.attributes.url})`,
  };

  return (
    <Col xs="12" xl="6" className="d-flex justify-content-center mb-5">
      <a className={styles.imageButtonLink} href={imageButtonData.linkSlug}>
        <div
          data-testid="about-us-page-image-button"
          style={aboutUsPageImageBackgroundUrlStyle}
          className={`${styles.imageButton} d-flex align-items-end`}
        >
          <Row>
            <Col className="mb-4">
              <p
                data-testid="about-us-page-image-button-text"
                className="text-white fs-2 fw-bold ms-2 ms-xl-5"
              >
                {imageButtonData.text}
              </p>
              <p
                data-testid="about-us-page-image-button-subtext"
                className="text-white ms-2 ms-xl-5"
              >
                {imageButtonData.subText}
              </p>
            </Col>
          </Row>
        </div>
      </a>
    </Col>
  );
};

export default AboutUsPageImageButton;
