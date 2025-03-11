import React, { useState } from 'react';
import './landingPageCardMobile.scss';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import { Col, Row, Spinner } from 'react-bootstrap';

type Props = {
  landingImage: LandingImage;
};

const LandingPageImageCardMobile: React.FC<Props> = ({ landingImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Row className="mt-3" data-testid="landing-image-card-mobile">
      <Col className="text-center">
        <Row>
          <Col className="mb-2">
            <h1 className="fs-1 fw-bold">{landingImage.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <h5>{landingImage.subTitle}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {!imageLoaded && (
              <Spinner
                className="landing-image-card-loading-spinner-mobile"
                animation="grow"
                variant="dark"
              />
            )}
            <img
              className={`landing-image-card-image-mobile ${
                imageLoaded ? '' : 'd-none'
              }`}
              src={landingImage.image.data.attributes.url}
              alt={landingImage.image.data.attributes.alternativeText}
              onLoad={() => setImageLoaded(true)}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LandingPageImageCardMobile;
