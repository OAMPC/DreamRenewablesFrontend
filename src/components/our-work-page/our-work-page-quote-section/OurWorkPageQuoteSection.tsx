import React from 'react';
import { Quote } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import './ourWorkPageQuoteSection.scss';

type Props = {
  quoteData: Quote;
};

const OurWorkPageQuoteSection: React.FC<Props> = ({ quoteData }) => {
  return (
    <div
      data-testid="our-work-page-quote-section"
      className="our-work-page-quote-section-wrapper"
    >
      <div className="p-4 our-work-page-quote-section-body">
        <p data-testid="our-work-page-quote-body" className="fs-2 fw-bolder">
          {quoteData.body}
        </p>
        <p data-testid="our-work-page-quote-author" className="fs-3 fst-italic">
          {quoteData.author}
        </p>
      </div>
    </div>
  );
};

export default OurWorkPageQuoteSection;
