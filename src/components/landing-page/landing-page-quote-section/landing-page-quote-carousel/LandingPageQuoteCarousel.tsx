import React from 'react';
import * as Bs from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './landingPageQuoteCarousel.scss';
import { QuoteSection } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import LandingPageQuoteCarouselCard from '../landing-page-quote-carousel-card/LandingPageQuoteCarouselCard';

type Props = {
  quoteSection: QuoteSection;
};

const LandingPageQuoteCarousel: React.FC<Props> = ({ quoteSection }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2175 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 2175, min: 1500 },
      items: 1.5,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 1.25,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.175,
    },
  };

  return (
    <div data-testid="landing-quote-section" className="mb-5">
      <Bs.Row>
        <Bs.Col className="text-center">
          <h2 className="fs-1 fw-bold mb-5">{quoteSection.title}</h2>
        </Bs.Col>
      </Bs.Row>
      <div>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots
          partialVisible
          draggable
          dotListClass="custom-dot-list-style"
        >
          {quoteSection.quoteCarousel.map((card, index) => (
            <LandingPageQuoteCarouselCard key={index} card={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPageQuoteCarousel;
