import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import OurDonorsPageDonor from '../../components/our-donors-page/ourDonorsPageDonor';
import { Col, Row } from 'react-bootstrap';

const OurDonorsPage: React.FC = () => {
  const { ourDonorsPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 data-testid="our-donors-page-title" className="fs-1 fw-bold">
            {ourDonorsPageStrapiData.pageTitle}
          </h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2 data-testid="our-donors-page-sub-title" className="fs-4">
            {ourDonorsPageStrapiData.pageSubTitle}
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {ourDonorsPageStrapiData.ourDonors.map((donor, index) => (
          <Col xl="3" md="4" xs="12" key={index}>
            <OurDonorsPageDonor ourDonor={donor} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default OurDonorsPage;
