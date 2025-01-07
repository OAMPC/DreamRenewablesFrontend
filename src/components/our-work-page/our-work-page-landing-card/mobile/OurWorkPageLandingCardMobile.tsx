import React from 'react';
import * as Bs from 'react-bootstrap';
import './ourWorkPageLandingCardMobile.scss';
import { LandingImage } from '../../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';

type Props = {
  landingImage: LandingImage;
};

const OurWorkPageLandingCardMobile: React.FC<Props> = ({ landingImage }) => {
  return (
    <Bs.Row data-testid="our-work-landing-card-mobile">
      <Bs.Col>
        <h1
          data-testid="our-work-landing-title-mobile"
          className="text-center my-3"
        >
          {landingImage.title}
        </h1>
        <Bs.Image
          fluid
          data-testid="our-work-landing-image-mobile"
          src={landingImage.image.data.attributes.url}
          className="our-work-landing-image-mobile"
        />
      </Bs.Col>
    </Bs.Row>
  );
};

export default OurWorkPageLandingCardMobile;
