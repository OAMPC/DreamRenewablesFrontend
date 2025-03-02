import React from 'react';
import { Quote } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import styles from './statTemplatePageQuoteSection.module.scss';

type Props = {
  quoteData: Quote;
};

const StatTemplatePageQuoteSection: React.FC<Props> = ({ quoteData }) => {
  return (
    <div
      data-testid="stat-template-page-quote-section"
      className={`${styles.statTemplatePageQuoteSectionWrapper} mb-5`}
    >
      <div
        className={`p-4 ${styles.quoteSectionBody} text-center text-sm-center`}
      >
        <p
          data-testid="stat-template-page-quote-body"
          className="fs-2 fw-bolder"
        >
          {quoteData.body}
        </p>
        <p
          data-testid="stat-template-page-quote-author"
          className="fs-3 fst-italic"
        >
          {quoteData.author}
        </p>
      </div>
    </div>
  );
};

export default StatTemplatePageQuoteSection;
