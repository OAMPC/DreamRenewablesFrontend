import React from 'react';
import { LandingImage } from '../../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import * as Bs from 'react-bootstrap';

type Props = {
  landingImage: LandingImage;
};

const AboutUsPageLandingCardDesktop: React.FC<Props> = ({ landingImage }) => {
  const aboutUsLandingImageCardStyle = {
    backgroundImage: `url(${landingImage.image.data.attributes.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    borderRadius: '25px',
  };

  const aboutUsPageLandingCardWrapperStyle = {
    marginLeft: '150px',
    marginRight: '150px',
  };

  return (
    <Bs.Row
      style={aboutUsPageLandingCardWrapperStyle}
      data-testid="about-us-landing-card-desktop"
    >
      <Bs.Col>
        <div
          className="d-flex align-items-center justify-content-start mt-3 about-us-landing-card"
          style={aboutUsLandingImageCardStyle}
          data-testid="about-us-landing-image-desktop"
        >
          <h1
            data-testid="about-us-landing-title-desktop"
            className="text-white fw-bold ms-5"
          >
            {landingImage.title}
          </h1>
        </div>
      </Bs.Col>
    </Bs.Row>
  );
};

export default AboutUsPageLandingCardDesktop;
