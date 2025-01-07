import React from 'react';
import { Metric } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import './ourWorkPageMetric.scss';

type Props = {
  metricData: Metric;
};

const OurWorkPageMetric: React.FC<Props> = ({ metricData }) => {
  return (
    <div data-testid="our-work-page-metric" className="m-xl-5">
      <p
        data-testid="our-work-page-metric-value"
        className="fs-1 fw-bolder our-work-page-metric-value"
      >
        {metricData.value}
      </p>
      <p data-testid="our-work-page-metric-description" className="fs-4">
        {metricData.valueDescription}
      </p>
    </div>
  );
};

export default OurWorkPageMetric;
