import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import DonatePagePaymentSection from '../../components/donate-page/donate-page-payment-section/DonatePagePaymentSection';
import StatTemplatePageMetric from '../../components/stat-template-page/stat-template-page-metric/statTemplatePageMetric';

const DonatePage: React.FC = () => {
  const { donatePageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row className="mb-5">
        <Col xs={12} lg={7}>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={donatePageStrapiData.landingCard}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={donatePageStrapiData.landingCard} />
          </div>
          <div className="mt-5 mt-lg-3 px-3 px-lg-5">
            <p
              data-testid="donate-page-pre-metric-text"
              className=" fs-3 text-center text-lg-start"
            >
              {donatePageStrapiData.preMetricText}
            </p>
          </div>
          <Row>
            {donatePageStrapiData.metrics.map((metric, index) => (
              <Col key={index} xl="6" sm="12">
                <StatTemplatePageMetric metricData={metric} />
              </Col>
            ))}
          </Row>
          <div className="mt-5 mt-lg-3 px-3 px-lg-5">
            <p
              data-testid="donate-page-post-metric-text"
              className=" fs-3 text-center text-lg-start"
            >
              {donatePageStrapiData.preMetricText}
            </p>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <DonatePagePaymentSection
            paymentStrapiData={donatePageStrapiData.paymentSection}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default DonatePage;
