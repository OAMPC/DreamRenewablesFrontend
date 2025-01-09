import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { useLoaderData } from 'react-router-dom';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import { LoaderData } from '../../data/types/LoaderData';
import GetInvolvedPageSection from '../../components/get-involved-page/get-involved-page-section/GetInvolvedPageSection';
import PaymentSection from '../../components/payment/payment-section/PaymentSection';

const GetInvolvedPage: React.FC = () => {
  const { getInvolvedPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={getInvolvedPageStrapiData.landingCard}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile
              landingCard={getInvolvedPageStrapiData.landingCard}
            />
          </div>
        </Col>
      </Row>
      {getInvolvedPageStrapiData.sections.map((section, index) => (
        <Row key={index} className="mb-5">
          <Col>
            <GetInvolvedPageSection sectionData={section} rowIndex={index} />
          </Col>
        </Row>
      ))}
      <Row>
        <Col>
          <PaymentSection
            paymentData={getInvolvedPageStrapiData.paymentSection}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default GetInvolvedPage;
