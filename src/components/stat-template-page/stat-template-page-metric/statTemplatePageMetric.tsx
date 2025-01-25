import React from 'react';
import { Metric } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import styles from './statTemplatePageMetric.module.scss';

type Props = {
  metricData: Metric;
};

const StatTemplatePageMetric: React.FC<Props> = ({ metricData }) => {
  return (
    <div data-testid="stat-template-page-metric" className="m-xl-5">
      <p
        data-testid="stat-template-page-metric-value"
        className={`fs-1 fw-bolder ${styles.statTemplatePageMetricValue}`}
      >
        {metricData.value}
      </p>
      <p data-testid="stat-template-page-metric-description" className="fs-4">
        {metricData.valueDescription}
      </p>
    </div>
  );
};

export default StatTemplatePageMetric;
