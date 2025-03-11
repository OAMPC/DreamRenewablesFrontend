import React, { useState } from 'react';

import './landingPageImageCardDesktop.scss';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

type Props = {
  landingImage: LandingImage;
};

const LandingPageImageCardDesktop: React.FC<Props> = ({ landingImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Card
          data-testid="landing-image-card-desktop"
          className="text-white landing-image-card"
        >
          {!imageLoaded && (
            <Row>
              <Col className="d-flex justify-content-center">
                <Spinner
                  className="landing-image-card-loading-spinner"
                  animation="grow"
                  variant="dark"
                />
              </Col>
            </Row>
          )}
          <Card.Img
            className={`landing-image-card-image ${imageLoaded ? '' : 'd-none'}`}
            src={landingImage.image.data.attributes.url}
            alt={landingImage.image.data.attributes.alternativeText}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded && (
            <Card.ImgOverlay className="d-flex align-items-end">
              <Row>
                <Col xs="6" className="mb-5 ms-5">
                  <Card.Title className="mb-3 landing-image-card-title">
                    {landingImage.title}
                  </Card.Title>
                  <Card.Text className="fs-3">
                    {landingImage.subTitle}
                  </Card.Text>
                </Col>
              </Row>
            </Card.ImgOverlay>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default LandingPageImageCardDesktop;
