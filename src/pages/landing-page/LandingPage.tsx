import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import * as Bs from 'react-bootstrap';
import './landingPage.css';
import LandingPageImageCardDesktop from '../../components/landing-page-card/desktop/LandingPageImageCardDesktop';
import useWindowDimensions from '../../hooks/windowDimensions';
import LandingPageImageCardMobile from '../../components/landing-page-card/mobile/LandingPageCardMobile';

const LandingPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData, landingPageStrapiData } =
    useLoaderData() as LoaderData;
  const { width } = useWindowDimensions();
  const showMobileView: boolean = width <= 992 ? true : false;

  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <Bs.Row>
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
    </PageWrapper>
  );
};

export default LandingPage;
