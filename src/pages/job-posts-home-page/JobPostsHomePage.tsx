import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { getNewestToOldestJobPostsStrapiData } from '../../api/strapiApi';
import { JobPostsTemplatePageStrapiContent } from '../../data/interfaces/job-post-template-page/JobPostTemplatePagesStrapiContent';
import JobPostCard from '../../components/job-post-card/JobPostCard';

const JobPostsHomePage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<JobPostsTemplatePageStrapiContent>({
      queryKey: ['jobPostsHomePage'],
      queryFn: getNewestToOldestJobPostsStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1
            data-testid="job-posts-home-page-title"
            className="fs-1 mt-5 mt-xl-3 fw-bold"
          >
            Job Posts
          </h1>
        </Col>
      </Row>
      <Row data-testid="job-posts-grid">
        {data.data.map((post, index) => (
          <Col
            key={index}
            xl={4}
            md={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <JobPostCard strapiData={post.attributes} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default JobPostsHomePage;
