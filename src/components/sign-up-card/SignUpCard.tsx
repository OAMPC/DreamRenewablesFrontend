import React from 'react';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';

import { Col, Row, Container } from 'react-bootstrap';

type Props = {
  strapiData: BlogPostTemplatePageStrapiContent;
};

const SignUpCard: React.FC<Props> = ({ strapiData }) => {
  return (
    <Container className="mb-1 d-flex flex-column flex-grow-1">
      <Row className="mb-1">
        <Col>
          <h1
            data-testid={`blog-card-title-${strapiData.url}`}
            className="fs-2 fw-bold mb-1"
          >
            {strapiData.title}
          </h1>
          <p
            data-testid={`blog-card-summary-${strapiData.url}`}
            className="fs-6 mb-1"
          >
            {strapiData.blogPostSummary}
          </p>
        </Col>
      </Row>
      <Row className="mt-auto">
        <Col className="col-auto">
          <span
            data-testid={`blog-card-published-time-${strapiData.url}`}
            className="text-muted"
          >
            {strapiData.publishedAt.split('T')[0]}
          </span>
        </Col>
        <Col className="col-auto">
          <span className="text-muted ">&#9679;</span>
        </Col>
        <Col>
          <span
            data-testid={`blog-card-author-${strapiData.url}`}
            className="text-muted"
          >
            {strapiData.author}
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpCard;
