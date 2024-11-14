import React from 'react';
import { QuoteCarouselItem } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import * as Bs from 'react-bootstrap';

type Props = {
  card: QuoteCarouselItem;
};

const LandingPageQuoteCarouselCard: React.FC<Props> = ({ card }) => {
  return (
    <div className="mb-5 me-5" data-testid="landing-page-quote-carousel-card">
      <Bs.Row>
        <Bs.Col>
          <p data-testid="quote-carousel-card-quote-text">{card.quoteText}</p>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPageQuoteCarouselCard;
