import React from 'react';
import * as Bs from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import PageWrapper from '../../components/page-wrapper/PageWrapper';

const OurMissionVisionAndValuesPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData } =
    useLoaderData() as LoaderData;

  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <Bs.Row>
        <Bs.Col>
          <h1>Hello World</h1>
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default OurMissionVisionAndValuesPage;
