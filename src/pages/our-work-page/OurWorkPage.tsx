import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import OurWorkPageQuoteSection from '../../components/our-work-page/our-work-page-quote-section/OurWorkPageQuoteSection';

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
      <Container>
        <Row className="gx-5">
          <Col xl="4">
            <OurWorkPageQuoteSection quoteData={ourWorkPageStrapiData.quote} />
          </Col>
          <Col xl="8">
            <h1>Test</h1>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default OurWorkPage;
