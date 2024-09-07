import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import * as Bs from 'react-bootstrap';
import './landingPage.css';
import LandingPageImageCard from '../../components/landing-page-card/LandingPageImageCard';

const LandingPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData, landingPageStrapiData } =
    useLoaderData() as LoaderData;
  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <Bs.Row>
        <Bs.Col>
          <LandingPageImageCard
            landingImage={landingPageStrapiData.landingImage}
          />
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default LandingPage;
