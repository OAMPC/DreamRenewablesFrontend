import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import DonatePagePaymentSection from '../../components/donate-page/donate-page-payment-section/DonatePagePaymentSection';

const DonatePage: React.FC = () => {
  const { donatePageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col xs={12} lg={7}>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={donatePageStrapiData.landingCard}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={donatePageStrapiData.landingCard} />
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
