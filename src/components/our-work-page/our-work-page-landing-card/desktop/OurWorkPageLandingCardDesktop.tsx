import React from 'react';
import * as Bs from 'react-bootstrap';
import { LandingImage } from '../../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';

type Props = {
  landingImage: LandingImage;
};

const OurWorkPageLandingCardDesktop: React.FC<Props> = ({ landingImage }) => {
  const ourWorkLandingImageCardStyle = {
    backgroundImage: `url(${landingImage.image.data.attributes.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '75vw',
    borderRadius: '25px',
  };

  return (
    <Bs.Row data-testid="our-work-landing-card-desktop">
      <Bs.Col className="d-flex justify-content-center">
        <div
          className="d-flex align-items-center justify-content-start mt-3 our-work-landing-card"
          style={ourWorkLandingImageCardStyle}
          data-testid="our-work-landing-image-desktop"
        >
          <h1
            data-testid="our-work-landing-title-desktop"
            className="text-white fw-bold ms-5"
          >
            {landingImage.title}
          </h1>
        </div>
      </Bs.Col>
    </Bs.Row>
  );
};

export default OurWorkPageLandingCardDesktop;
