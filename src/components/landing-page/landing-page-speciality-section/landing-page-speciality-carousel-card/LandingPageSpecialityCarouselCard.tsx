import React from 'react';
import { SpecialtyCarouselItem } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './landingPageSpecialityCarouselCard.scss';

type Props = {
  card: SpecialtyCarouselItem;
};

const LandingPageSpecialityCarouselCard: React.FC<Props> = ({ card }) => {
  return (
    <div
      className="mb-5 me-5"
      data-testid="landing-page-speciality-carousel-card"
    >
      <Bs.Row className="align-items-end">
        <Bs.Col lg="5" xl={{ order: 'first' }} xs={{ order: 'last' }}>
          <Bs.Row>
            <Bs.Col lg={{ span: 9, offset: 1 }}>
              <div className="specialty-description-wrapper">
                <div className="specialty-description">
                  <h4
                    data-testid="speciality-carousel-card-description-title"
                    className="fs-4 fw-bold"
                  >
                    {card.title}
                  </h4>
                  <p data-testid="speciality-carousel-card-description">
                    {card.description}
                  </p>
                  <Bs.Nav.Link
                    data-testid="speciality-carousel-card-description-link"
                    href={card.link.linkSlug}
                  >
                    {card.link.linkString}
                    <Bs.Image
                      loading="lazy"
                      data-testid="speciality-carousel-card-description-image"
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
        <Bs.Col
          lg="5"
          xl={{ order: 'last' }}
          xs={{ order: 'first' }}
          className="mb-4"
        >
          <Bs.Image
            fluid
            src={card.image.data.attributes.url}
            alt={card.image.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPageSpecialityCarouselCard;
