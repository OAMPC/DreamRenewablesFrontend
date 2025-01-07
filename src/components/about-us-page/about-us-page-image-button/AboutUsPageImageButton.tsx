import React from 'react';
import { ImageButton } from '../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import { Row, Col } from 'react-bootstrap';
import './aboutUsPageImageButton.scss';

type Props = {
  imageButtonData: ImageButton;
};

const AboutUsPageImageButton: React.FC<Props> = ({ imageButtonData }) => {
  const aboutUsPageImageButtonStyle = {
    backgroundImage: `url(${imageButtonData.image.data.attributes.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    width: '40vw',
    borderRadius: '25px',
  };

  return (
    <Col xs="12" xl="6" className="d-flex justify-content-center mb-5">
      <div
        data-testid="about-us-page-image-button"
        style={aboutUsPageImageButtonStyle}
        className="d-flex align-items-end about-us-image-button"
      >
        <Row>
          <Col className="mb-4">
            <p
              data-testid="about-us-page-image-button-text"
              className="text-white fs-2 fw-bold ms-5"
            >
              {imageButtonData.text}
            </p>
            <p
              data-testid="about-us-page-image-button-subtext"
              className="text-white ms-5"
            >
              {imageButtonData.subText}
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default AboutUsPageImageButton;
