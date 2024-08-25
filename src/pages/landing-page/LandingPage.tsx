import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';

const LandingPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData } =
    useLoaderData() as LoaderData;
  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <h1 className="fs-1">Hello World this is a Test!</h1>
    </PageWrapper>
  );
};

export default LandingPage;
