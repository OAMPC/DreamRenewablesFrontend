import React from 'react';
import { Quote } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import styles from './ourWorkPageQuoteSection.module.scss';

type Props = {
  quoteData: Quote;
};

const OurWorkPageQuoteSection: React.FC<Props> = ({ quoteData }) => {
  return (
    <div
      data-testid="our-work-page-quote-section"
      className={`${styles.ourWorkPageQuoteSectionWrapper} mb-5`}
    >
      <div className={`${styles.ourWorkPageQuoteSectionBody} p-4`}>
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
