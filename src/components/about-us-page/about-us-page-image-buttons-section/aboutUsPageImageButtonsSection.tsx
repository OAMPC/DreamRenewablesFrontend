import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ImageButtonSection } from '../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import AboutUsPageImageButton from '../about-us-page-image-button/AboutUsPageImageButton';

type Props = {
  imageButtonSectionData: ImageButtonSection;
};

const AboutUsPageImageButtonsSection: React.FC<Props> = ({
  imageButtonSectionData,
}) => {
  return (
    <div className="mt-5" data-testid="about-us-page-image-buttons-section">
      <Row>
        <Col>
          <h2
            data-testid="about-us-page-image-buttons-section-title"
            className="text-center fs-2 fw-bolder mb-xl-5 mb-sm-2"
          >
            {imageButtonSectionData.title}
          </h2>
        </Col>
      </Row>
      <Row>
        {imageButtonSectionData.imageButtons.map((imageButton) => (
          <AboutUsPageImageButton imageButtonData={imageButton} />
        ))}
      </Row>
    </div>
  );
};

export default AboutUsPageImageButtonsSection;
