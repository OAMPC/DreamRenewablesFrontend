import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import OurWorkPageQuoteSection from '../../components/our-work-page/our-work-page-quote-section/OurWorkPageQuoteSection';
import OurWorkPageMetric from '../../components/our-work-page/our-work-page-metric/OurWorkPageMetric';

const StatTemplatePage: React.FC = () => {
  const { data } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={data.landingImage} />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={data.landingImage} />
          </div>
        </Col>
      </Row>
      <Container className="mb-5">
        <Row className="gx-5 mb-5">
          <Col xl="4">
            <OurWorkPageQuoteSection quoteData={data.quote} />
          </Col>
          <Col xl={{ span: 7, offset: 1 }} sm="12">
            <Row>
              {data.metrics.map((metric, index) => (
                <Col key={index} xl="6" sm="12">
                  <OurWorkPageMetric metricData={metric} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default StatTemplatePage;
