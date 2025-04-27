import React from 'react';
import { SpecialtyCarouselItem } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import './landingPageSpecialityCarouselCard.scss';
import { Col, Nav, Row, Image } from 'react-bootstrap';

type Props = {
  card: SpecialtyCarouselItem;
};

const LandingPageSpecialityCarouselCard: React.FC<Props> = ({ card }) => {
  return (
    <div
      className="mb-5 me-5"
      data-testid="landing-page-speciality-carousel-card"
    >
      <Row className="align-items-end">
        <Col lg="5" xl={{ order: 'first' }} xs={{ order: 'last' }}>
          <Row>
            <Col lg={{ span: 9, offset: 1 }}>
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
                  <Nav.Link
                    data-testid="speciality-carousel-card-description-link"
                    href={card.link.linkSlug}
                  >
                    {card.link.linkString}
                    <Image
                      loading="lazy"
                      className="ms-2 mb-2"
                      src={card.linkIcon.data.attributes.url}
                      alt={card.linkIcon.data.attributes.alternativeText}
                    />
                  </Nav.Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg="5"
          xl={{ order: 'last' }}
          xs={{ order: 'first' }}
          className="mb-4"
        >
          <Image
            fluid
            data-testid="speciality-carousel-card-description-image"
            className="speciality-carousel-card-description-image"
            src={card.image.data.attributes.url}
            alt={card.image.data.attributes.alternativeText}
          />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPageSpecialityCarouselCard;
