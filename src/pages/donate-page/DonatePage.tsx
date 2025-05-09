import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import DonatePagePaymentSection from '../../components/donate-page/donate-page-payment-section/DonatePagePaymentSection';
import Metric from '../../components/metric/Metric';
import { useQuery } from '@tanstack/react-query';
import { getDonatePageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { DonatePageStrapiContent } from '../../data/interfaces/donate-page/DonatePageStrapiContent';

const DonatePage: React.FC = () => {
  const { data, isPending, error } = useQuery<DonatePageStrapiContent>({
    queryKey: ['donatePage'],
    queryFn: getDonatePageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row className="mb-5">
        <Col xs={12} lg={7}>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={data.landingCard} />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={data.landingCard} />
          </div>
          <div className="mt-5 mt-lg-3 px-3 px-lg-5">
            <p
              data-testid="donate-page-pre-metric-text"
              className=" fs-3 text-center text-lg-start"
            >
              {data.preMetricText}
            </p>
          </div>
          <Row>
            {data.metrics.map((metric, index) => (
              <Col key={index} xl="6" sm="12">
                <Metric metricData={metric} />
              </Col>
            ))}
          </Row>
          <div className="mt-5 mt-lg-3 px-3 px-lg-5">
            <p
              data-testid="donate-page-post-metric-text"
              className=" fs-3 text-center text-lg-start"
            >
              {data.preMetricText}
            </p>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <DonatePagePaymentSection paymentStrapiData={data.paymentSection} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default DonatePage;
