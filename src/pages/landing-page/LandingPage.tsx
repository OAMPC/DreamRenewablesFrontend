import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import LandingPageVideoSection from '../../components/landing-page/landing-page-video-section/LandingPageVideoSection';
import LandingPageSpecialityCarousel from '../../components/landing-page/landing-page-speciality-section/landing-page-speciality-carousel/LandingPageSpecialityCarousel';
import LandingPageQuoteCarousel from '../../components/landing-page/landing-page-quote-section/landing-page-quote-carousel/LandingPageQuoteCarousel';
import PaymentSection from '../../components/payment/payment-section/PaymentSection';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getLandingPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { LandingPageStrapiContent } from '../../data/interfaces/landing-page/LandingPageStrapiContent';
import LandingPageCardDesktop from '../../components/landing-page/landing-page-card/desktop/LandingPageCardDesktop';
import LandingPageCardMobile from '../../components/landing-page/landing-page-card/mobile/LandingPageCardMobile';

const LandingPage: React.FC = () => {
  const { data, isPending, error } = useQuery<LandingPageStrapiContent>({
    queryKey: ['landingPage'],
    queryFn: getLandingPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  return (
    <PageWrapper>
      <Row className="mb-5">
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingPageCardDesktop landingImage={data.landingImageDesktop} />
          </div>
          <div className="d-sm-none">
            <LandingPageCardMobile landingCard={data.landingImageMobile} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageVideoSection videoSection={data.videoSection} />
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageSpecialityCarousel
            specialitySection={data.specialitySection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageQuoteCarousel quoteSection={data.quoteSection} />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaymentSection paymentData={data.paymentSection} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default LandingPage;
