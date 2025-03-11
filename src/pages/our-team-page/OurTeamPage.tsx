import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import { useLoaderData } from 'react-router-dom';
import OurTeamPageDepartmentSection from '../../components/our-team-page/OurTeamPageDepartmentSection';
import { Col, Row } from 'react-bootstrap';

const OurTeamPage: React.FC = () => {
  const { ourTeamPageStrapiData } = useLoaderData() as LoaderData;

  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 data-testid="our-team-page-title" className="fs-1 fw-bold">
            {ourTeamPageStrapiData.pageTitle}
          </h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2 data-testid="our-team-page-sub-title" className="fs-4">
            {ourTeamPageStrapiData.pageSubTitle}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {ourTeamPageStrapiData.departmentSections.map(
            (departmentSection, index) => (
              <OurTeamPageDepartmentSection
                key={index}
                departmentSection={departmentSection}
              />
            )
          )}
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurTeamPage;
