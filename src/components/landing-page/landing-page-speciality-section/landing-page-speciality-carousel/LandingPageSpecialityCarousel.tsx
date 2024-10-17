import React from 'react';
import * as Bs from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SpecialitySection } from '../../../../data/interfaces/landing-page/LandingPageStrapiContent';
import LandingPageSpecialityCarouselCard from '../landing-page-speciality-carousel-card/LandingPageSpecialityCarouselCard';

type Props = {
  specialitySection: SpecialitySection;
};

const LandingPageSpecialityCarousel: React.FC<Props> = ({
  specialitySection,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };
  return (
    <div className="mb-5">
      <Bs.Row>
        <Bs.Col className="text-center">
          <h2 className="fs-1 fw-bold mb-5">{specialitySection.title}</h2>
        </Bs.Col>
      </Bs.Row>
      <div className="speciality-carousel-wrapper">
        <Carousel
          centerMode
          responsive={responsive}
          arrows={false}
          infinite
          showDots
        >
          {specialitySection.specialityCarousel.map((card) => (
            <LandingPageSpecialityCarouselCard card={card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPageSpecialityCarousel;
