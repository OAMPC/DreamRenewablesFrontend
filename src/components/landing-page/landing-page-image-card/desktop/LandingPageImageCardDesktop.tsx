import React from 'react';
import * as Bs from 'react-bootstrap';
import './landingPageImageCardDesktop.scss';
import { LandingImage } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';

type Props = {
  landingImage: LandingImage;
};

const LandingPageImageCardDesktop: React.FC<Props> = ({ landingImage }) => {
  return (
    <Bs.Card
      data-testid="landing-image-card-desktop"
      className="text-white landing-image-card"
    >
      <Bs.Card.Img
        className="landing-image-card-image"
        src={landingImage.image.data.attributes.url}
        alt={landingImage.image.data.attributes.alternativeText}
      />

      <Bs.Card.ImgOverlay className="d-flex align-items-end">
        <Bs.Row>
          <Bs.Col xl="6" className="mb-5 ms-5">
            <Bs.Card.Title className="mb-3 landing-image-card-title">
              {landingImage.title}
            </Bs.Card.Title>
            <Bs.Card.Text className="fs-3">
              {landingImage.subTitle}
            </Bs.Card.Text>
          </Bs.Col>
        </Bs.Row>
      </Bs.Card.ImgOverlay>
    </Bs.Card>
  );
};

export default LandingPageImageCardDesktop;
