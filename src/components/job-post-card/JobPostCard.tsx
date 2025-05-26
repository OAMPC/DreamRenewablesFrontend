import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';
import styles from './jobPostCard.module.scss';
import { JobPostTemplatePageStrapiContent } from '../../data/interfaces/job-post-template-page/JobPostTemplatePageStrapiContent';

type Props = {
  strapiData: JobPostTemplatePageStrapiContent;
};

const JobPostCard: React.FC<Props> = ({ strapiData }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  const linkPath = strapiData.isVolunteeringOpportunity
    ? `/volunteering-opportunity/${strapiData.url}`
    : `/job-post/${strapiData.url}`;

  return (
    <div data-testid="job-post-card" className="h-100">
      <Link
        to={linkPath}
        className="rounded-3 text-decoration-none h-100"
        data-testid={`job-post-card-link-${strapiData.url}`}
        onClick={handleLinkClick}
      >
        <div className="d-flex flex-column rounded-3 h-100 p-3 shadow text-dark">
          <Row>
            <Col>
              <div className="mb-3 d-flex justify-content-center">
                <Image
                  fluid
                  data-testid={`job-post-card-landing-image-${strapiData.url}`}
                  src={strapiData.landingImage.data.attributes.url}
                  className={`${styles.jobPostCardImage} d-flex object-fit-cover rounded-3`}
                />
              </div>
            </Col>
          </Row>
          <Container className="d-flex flex-column flex-grow-1">
            <Row className="mb-1">
              <Col>
                <h1
                  data-testid={`job-post-card-title-${strapiData.url}`}
                  className="fs-2 fw-bold mb-1"
                >
                  {strapiData.title}
                </h1>
                <p
                  data-testid={`job-post-card-summary-${strapiData.url}`}
                  className="fs-6 mb-1"
                >
                  {strapiData.summary}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Link>
    </div>
  );
};

export default JobPostCard;
