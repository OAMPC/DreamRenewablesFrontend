import React from 'react';
import { QuoteCarouselItem } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './landingPageQuoteCarouselCard.scss';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';

type Props = {
  card: QuoteCarouselItem;
  quoteIcon: ImageStrapiContent;
};

const LandingPageQuoteCarouselCard: React.FC<Props> = ({ card, quoteIcon }) => {
  return (
    <div
      className="mb-5 me-3 me-lg-5 landing-page-quote-carousel-card-wrapper"
      data-testid="landing-page-quote-carousel-card"
    >
      <Bs.Row>
        <Bs.Col>
          <Bs.Image
            loading="lazy"
            fluid
            data-testid="quote-carousel-card-icon"
            className="mb-3 quote-carousel-card-icon"
            src={quoteIcon.data.attributes.url}
            alt={quoteIcon.data.attributes.alternativeText}
          />
          <p className="mb-2" data-testid="quote-carousel-card-quote-text">
            {card.quoteText}
          </p>
          <p
            className="fw-bolder mb-2"
            data-testid="quote-carousel-card-quote-author"
          >
            {card.quoteAuthor}
          </p>
          <p
            className="mb-3"
            data-testid="quote-carousel-card-quote-author-role"
          >
            {card.quoteAuthorRole}
          </p>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPageQuoteCarouselCard;
