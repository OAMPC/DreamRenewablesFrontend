import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import useWindowDimensions from '../../hooks/windowDimensions';
import LandingPageImageCardMobile from '../../components/landing-page/landing-page-image-card/mobile/LandingPageCardMobile';
import LandingPageImageCardDesktop from '../../components/landing-page/landing-page-image-card/desktop/LandingPageImageCardDesktop';
import LandingPageVideoSection from '../../components/landing-page/landing-page-video-section/LandingPageVideoSection';
import LandingPageSpecialityCarousel from '../../components/landing-page/landing-page-speciality-section/landing-page-speciality-carousel/LandingPageSpecialityCarousel';
import LandingPageQuoteCarousel from '../../components/landing-page/landing-page-quote-section/landing-page-quote-carousel/LandingPageQuoteCarousel';
import PaymentSection from '../../components/payment/payment-section/PaymentSection';
import { Col, Row } from 'react-bootstrap';

const LandingPage: React.FC = () => {
  const { landingPageStrapiData } = useLoaderData() as LoaderData;
  const { width } = useWindowDimensions();
  const showMobileView: boolean = width <= 992 ? true : false;

  return (
    <PageWrapper>
      <Row className="mb-5">
        <Col>
          {showMobileView ? (
            <LandingPageImageCardMobile
              landingImage={landingPageStrapiData.landingImageMobile}
            />
          ) : (
            <LandingPageImageCardDesktop
              landingImage={landingPageStrapiData.landingImageDesktop}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageVideoSection
            videoSection={landingPageStrapiData.videoSection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageSpecialityCarousel
            specialitySection={landingPageStrapiData.specialitySection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingPageQuoteCarousel
            quoteSection={landingPageStrapiData.quoteSection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaymentSection paymentData={landingPageStrapiData.paymentSection} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default LandingPage;
