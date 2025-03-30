import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import OurTeamPageDepartmentSection from '../../components/our-team-page/OurTeamPageDepartmentSection';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getOurTeamPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { OurTeamPageStrapiContent } from '../../data/interfaces/our-team-page/OurTeamPageStrapiContent';

const OurTeamPage: React.FC = () => {
  const { data, isPending, error } = useQuery<OurTeamPageStrapiContent>({
    queryKey: ['ourTeamPage'],
    queryFn: getOurTeamPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 data-testid="our-team-page-title" className="fs-1 fw-bold">
            {data.pageTitle}
          </h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2 data-testid="our-team-page-sub-title" className="fs-4">
            {data.pageSubTitle}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {data.departmentSections.map((departmentSection, index) => (
            <OurTeamPageDepartmentSection
              key={index}
              departmentSection={departmentSection}
            />
          ))}
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurTeamPage;
