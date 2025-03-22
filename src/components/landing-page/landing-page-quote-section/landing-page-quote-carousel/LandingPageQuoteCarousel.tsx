import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './landingPageQuoteCarousel.scss';
import { QuoteSection } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import LandingPageQuoteCarouselCard from '../landing-page-quote-carousel-card/LandingPageQuoteCarouselCard';
import { Col, Row } from 'react-bootstrap';

type Props = {
  quoteSection: QuoteSection;
};

const LandingPageQuoteCarousel: React.FC<Props> = ({ quoteSection }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2175 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2175, min: 1500 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 1,
      partialVisibilityGutter: 25,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 25,
    },
  };

  return (
    <div data-testid="landing-quote-section" className="landing-quote-section">
      <Row>
        <Col className="text-center">
          <h2 className="fs-1 fw-bold mb-3">{quoteSection.title}</h2>
        </Col>
      </Row>
      <div>
        <Carousel
          arrows={false}
          className="landing-page-quote-carousel"
          draggable
          dotListClass="custom-dot-list-style"
          responsive={responsive}
          showDots
        >
          {quoteSection.quoteCarousel.map((card, index) => (
            <LandingPageQuoteCarouselCard
              key={index}
              card={card}
              quoteIcon={quoteSection.quoteIcon}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPageQuoteCarousel;
