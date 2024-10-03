import React from 'react';
import * as Bs from 'react-bootstrap';
import './landingPageCardMobile.scss';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';

type Props = {
  landingImage: LandingImage;
};

const LandingPageImageCardMobile: React.FC<Props> = ({ landingImage }) => {
  return (
    <Bs.Row className="mt-3" data-testid="landing-image-card-mobile">
      <Bs.Col className="text-center">
        <Bs.Row>
          <Bs.Col className="mb-2">
            <h1 className="fs-1 fw-bold">{landingImage.title}</h1>
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col className="mb-4">
            <h5>{landingImage.subTitle}</h5>
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col className="d-flex justify-content-center">
            <img
              className="landing-image-card-image-mobile"
              src={landingImage.image.data.attributes.url}
              alt={landingImage.image.data.attributes.alternativeText}
            />
          </Bs.Col>
        </Bs.Row>
      </Bs.Col>
    </Bs.Row>
  );
};

export default LandingPageImageCardMobile;
