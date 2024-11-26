import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import * as Bs from 'react-bootstrap';
import useWindowDimensions from '../../hooks/windowDimensions';
import LandingPageImageCardMobile from '../../components/landing-page/landing-page-image-card/mobile/LandingPageCardMobile';
import LandingPageImageCardDesktop from '../../components/landing-page/landing-page-image-card/desktop/LandingPageImageCardDesktop';
import LandingPageVideoSection from '../../components/landing-page/landing-page-video-section/LandingPageVideoSection';
import LandingPageSpecialityCarousel from '../../components/landing-page/landing-page-speciality-section/landing-page-speciality-carousel/LandingPageSpecialityCarousel';
import LandingPagePaymentSection from '../../components/landing-page/landing-page-payment-section/LandingPagePaymentSection';
import LandingPageQuoteCarousel from '../../components/landing-page/landing-page-quote-section/landing-page-quote-carousel/LandingPageQuoteCarousel';

const LandingPage: React.FC = () => {
  const { landingPageStrapiData } = useLoaderData() as LoaderData;
  const { width } = useWindowDimensions();
  const showMobileView: boolean = width <= 992 ? true : false;

  return (
    <PageWrapper>
      <Bs.Row className="mb-5">
        <Bs.Col>
          {showMobileView ? (
            <LandingPageImageCardMobile
              landingImage={landingPageStrapiData.landingImageMobile}
            />
          ) : (
            <LandingPageImageCardDesktop
              landingImage={landingPageStrapiData.landingImageDesktop}
            />
          )}
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <LandingPageVideoSection
            videoSection={landingPageStrapiData.videoSection}
          />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <LandingPageSpecialityCarousel
            specialitySection={landingPageStrapiData.specialitySection}
          />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <LandingPageQuoteCarousel
            quoteSection={landingPageStrapiData.quoteSection}
          />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <LandingPagePaymentSection
            paymentSection={landingPageStrapiData.paymentSection}
          />
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default LandingPage;
