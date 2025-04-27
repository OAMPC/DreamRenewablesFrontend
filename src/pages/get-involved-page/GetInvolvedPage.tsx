import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import GetInvolvedPageSection from '../../components/get-involved-page/get-involved-page-section/GetInvolvedPageSection';
import PaymentSection from '../../components/payment/payment-section/PaymentSection';
import { useQuery } from '@tanstack/react-query';
import { getGetInvolvedPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { GetInvolvedPageStrapiContent } from '../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';

const GetInvolvedPage: React.FC = () => {
  const { data, isPending, error } = useQuery<GetInvolvedPageStrapiContent>({
    queryKey: ['getInvolvedPage'],
    queryFn: getGetInvolvedPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={data.landingCard} />
          </div>
          <div className="d-sm-none mb-5">
            <LandingCardMobile landingCard={data.landingCard} />
          </div>
        </Col>
      </Row>
      {data.sections.map((section, index) => (
        <Row key={index} className="mb-5">
          <Col>
            <GetInvolvedPageSection sectionData={section} rowIndex={index} />
          </Col>
        </Row>
      ))}
      <Row>
        <Col>
          <PaymentSection paymentData={data.paymentSection} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default GetInvolvedPage;
