import React from 'react';
import { SpecialtyCarouselItem } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './landingPageSpecialityCarouselCard.scss';

type Props = {
  card: SpecialtyCarouselItem;
};

const LandingPageSpecialityCarouselCard: React.FC<Props> = ({ card }) => {
  return (
    <div>
      <Bs.Row className="align-items-end">
        <Bs.Col lg="5">
          <Bs.Row>
            <Bs.Col lg={{ span: 9, offset: 1 }}>
              <div className="specialty-description-wrapper">
                <div className="specialty-description">
                  <h4 className="fs-4 fw-bold">{card.title}</h4>
                  <p>{card.description}</p>
                  <Bs.Nav.Link href={card.link.linkSlug}>
                    {card.link.linkString}
                    <Bs.Image
                      className="ms-2 mb-2"
                      src={card.linkIcon.data.attributes.url}
                      alt={card.linkIcon.data.attributes.alternativeText}
                    />
                  </Bs.Nav.Link>
                </div>
              </div>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col lg="5">
          <Bs.Image
            src={card.image.data.attributes.url}
            alt={card.image.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPageSpecialityCarouselCard;
