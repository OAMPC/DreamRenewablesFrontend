import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import OurWorkPageQuoteSection from '../../components/our-work-page/our-work-page-quote-section/OurWorkPageQuoteSection';
import OurWorkPageAccordion from '../../components/our-work-page/our-work-page-accordion/OurWorkPageAccordion';
import Metric from '../../components/metric/Metric';
import { useQuery } from '@tanstack/react-query';
import { getOurWorkPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { OurWorkPageStrapiContent } from '../../data/interfaces/our-work-page/OurWorkPageStrapiContent';

const OurWorkPage: React.FC = () => {
  const { data, isPending, error } = useQuery<OurWorkPageStrapiContent>({
    queryKey: ['ourWorkPage'],
    queryFn: getOurWorkPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

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
                  <Metric metricData={metric} />
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
              {data.accordionSection.title}
            </h2>
            <p
              data-testid="our-work-page-accordion-description"
              className="fs-5 text-center"
            >
              {data.accordionSection.description}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md="8">
            <OurWorkPageAccordion
              accordionData={data.accordionSection.accordionItems}
            />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default OurWorkPage;
