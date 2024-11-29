import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import * as Bs from 'react-bootstrap';

const OurDonorsPage: React.FC = () => {
  const { ourDonorsPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Bs.Row className="mt-5 mb-2">
        <Bs.Col className="text-center">
          <h1 data-testid="our-donors-page-title" className="fs-1 fw-bold">
            {ourDonorsPageStrapiData.pageTitle}
          </h1>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-5">
        <Bs.Col className="text-center">
          <h2 data-testid="our-donors-page-sub-title" className="fs-4">
            {ourDonorsPageStrapiData.pageSubTitle}
          </h2>
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default OurDonorsPage;
