import React from 'react';
import { Metric as IMetric } from '../../data/interfaces/metric/Metric';
import styles from './metric.module.scss';

type Props = {
  metricData: IMetric;
};

const Metric: React.FC<Props> = ({ metricData }) => {
  return (
    <div data-testid="metric" className="m-xl-5">
      <p
        data-testid="metric-value"
        className={`fs-1 fw-bolder ${styles.metricValue}`}
      >
        {metricData.value}
      </p>
      <p data-testid="metric-description" className="fs-4">
        {metricData.valueDescription}
      </p>
    </div>
  );
};

export default Metric;
