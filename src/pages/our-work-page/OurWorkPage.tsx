import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import OurWorkPageQuoteSection from '../../components/our-work-page/our-work-page-quote-section/OurWorkPageQuoteSection';
import OurWorkPageMetric from '../../components/our-work-page/our-work-page-metric/OurWorkPageMetric';
import OurWorkPageAccordion from '../../components/our-work-page/our-work-page-accordion/OurWorkPageAccordion';

const OurWorkPage: React.FC = () => {
  const { ourWorkPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={ourWorkPageStrapiData.landingImage}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile
              landingCard={ourWorkPageStrapiData.landingImage}
            />
          </div>
        </Col>
      </Row>
      <Container className="mb-5">
        <Row className="gx-5 mb-5">
          <Col xl="4">
            <OurWorkPageQuoteSection quoteData={ourWorkPageStrapiData.quote} />
          </Col>
          <Col xl={{ span: 7, offset: 1 }} sm="12">
            <Row>
              {ourWorkPageStrapiData.metrics.map((metric, index) => (
                <Col key={index} xl="6" sm="12">
                  <OurWorkPageMetric metricData={metric} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h2
              data-testid="our-work-page-accordion-title"
              className="fs-2 fw-bolder text-center"
            >
              {ourWorkPageStrapiData.accordionSection.title}
            </h2>
            <p
              data-testid="our-work-page-accordion-description"
              className="fs-5 text-center"
            >
              {ourWorkPageStrapiData.accordionSection.description}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md="8">
            <OurWorkPageAccordion
              accordionData={
                ourWorkPageStrapiData.accordionSection.accordionItems
              }
            />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default OurWorkPage;
