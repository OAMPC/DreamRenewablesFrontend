import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import StatTemplatePageQuoteSection from '../../components/stat-template-page/stat-template-page-quote-section/statTemplatePageQuoteSection';
import StatTemplatePageMetric from '../../components/stat-template-page/stat-template-page-metric/statTemplatePageMetric';

const StatTemplatePage: React.FC = () => {
  const { statTemplatePageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={statTemplatePageStrapiData.landingImage}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile
              landingCard={statTemplatePageStrapiData.landingImage}
            />
          </div>
        </Col>
      </Row>
      <Container className="mb-5">
        <Row className="gx-5 mb-5">
          <Col xl="4">
            <StatTemplatePageQuoteSection
              quoteData={statTemplatePageStrapiData.quote}
            />
          </Col>
          <Col xl={{ span: 7, offset: 1 }} sm="12">
            <Row>
              {statTemplatePageStrapiData.metrics.map((metric, index) => (
                <Col key={index} xl="6" sm="12">
                  <StatTemplatePageMetric metricData={metric} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <p
            data-testid="stat-template-page-free-text"
            className="fs-4 px-5 text-center"
          >
            {statTemplatePageStrapiData.freeText}
          </p>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default StatTemplatePage;
