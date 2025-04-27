import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import StatTemplatePageQuoteSection from '../../components/stat-template-page/stat-template-page-quote-section/statTemplatePageQuoteSection';
import { StatTemplatePageStrapiContent } from '../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import Metric from '../../components/metric/Metric';
import Markdown from '../../components/markdown/Markdown';

type Props = {
  strapiData: StatTemplatePageStrapiContent;
};

const StatTemplatePage: React.FC<Props> = ({ strapiData }) => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={strapiData.landingImage} />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={strapiData.landingImage} />
          </div>
        </Col>
      </Row>
      <Container className="mb-5">
        <Row className="gx-5 mb-5">
          <Col xl="4">
            <StatTemplatePageQuoteSection quoteData={strapiData.quote} />
          </Col>
          <Col xl={{ span: 7, offset: 1 }} sm="12">
            <Row>
              {strapiData.metrics.map((metric, index) => (
                <Col key={index} xl="6" sm="12">
                  <Metric metricData={metric} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="mx-xl-5 px-xl-5">
        <Col>
          <div
            data-testid="stat-template-page-free-text"
            className="fs-4 px-xl-5 text-center"
          >
            <Markdown rawMarkdown={strapiData.freeText} />
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default StatTemplatePage;
