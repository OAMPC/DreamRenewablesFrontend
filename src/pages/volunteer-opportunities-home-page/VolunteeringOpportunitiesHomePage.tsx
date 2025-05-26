import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { getNewestToOldestVolunteeringOpportunitiesStrapiData } from '../../api/strapiApi';
import JobPostCard from '../../components/job-post-card/JobPostCard';
import { JobPostsTemplatePageStrapiContent } from '../../data/interfaces/job-post-template-page/JobPostTemplatePagesStrapiContent';

const VolunteeringOpportunitiesHomePage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<JobPostsTemplatePageStrapiContent>({
      queryKey: ['volunteerOpportunitiesHomePage'],
      queryFn: getNewestToOldestVolunteeringOpportunitiesStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1
            data-testid="volunteer-opportunities-home-page-title"
            className="fs-1 mt-5 mt-xl-3 fw-bold"
          >
            Volunteer Opportunities
          </h1>
        </Col>
      </Row>
      <Row data-testid="volunteer-opportunities-grid">
        {data.data.map((opportunity, index) => (
          <Col
            key={index}
            xl={4}
            md={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <JobPostCard strapiData={opportunity.attributes} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default VolunteeringOpportunitiesHomePage;
