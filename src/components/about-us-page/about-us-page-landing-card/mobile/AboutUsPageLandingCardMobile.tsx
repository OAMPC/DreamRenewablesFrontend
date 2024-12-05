import React from 'react';
import { LandingImage } from '../../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './aboutUsPageLandingCardMobile.scss';

type Props = {
  landingImage: LandingImage;
};

const AboutUsPageLandingCardMobile: React.FC<Props> = ({ landingImage }) => {
  return (
    <Bs.Row data-testid="about-us-landing-card-mobile">
      <Bs.Col>
        <h1
          data-testid="about-us-landing-title-mobile"
          className="text-center my-3"
        >
          {landingImage.title}
        </h1>
        <Bs.Image
          fluid
          data-testid="about-us-landing-image-mobile"
          src={landingImage.image.data.attributes.url}
          className="about-us-landing-image-mobile"
        />
      </Bs.Col>
    </Bs.Row>
  );
};

export default AboutUsPageLandingCardMobile;
