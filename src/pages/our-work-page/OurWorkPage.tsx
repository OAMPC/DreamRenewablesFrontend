import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';

const OurWorkPage: React.FC = () => {
  const { ourWorkPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <h1 data-testid="our-work-page-title" className="text-center">
            {ourWorkPageStrapiData.landingImage.title}
          </h1>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurWorkPage;
