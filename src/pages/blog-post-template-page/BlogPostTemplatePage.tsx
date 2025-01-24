import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';
import Markdown from '../../components/markdown/Markdown';

type Props = {
  strapiData: BlogPostTemplatePageStrapiContent;
};

const BlogPostTemplatePage: React.FC<Props> = ({ strapiData }) => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="mb-3 d-flex justify-content-center">
            <Image
              fluid
              data-testid="landing-image"
              src={strapiData.landingImage.data.attributes.url}
              className="rounded-3 d-flex justify-content-center"
            />
          </div>
        </Col>
      </Row>
      <Container className="mb-5">
        <Row className="mb-3">
          <Col>
            <h1
              data-testid="blog-post-title"
              className="fs-1 fw-bold text-center"
            >
              {strapiData.title}
            </h1>
            <p data-testid="blog-post-summary" className="fs-5 text-center">
              {strapiData.blogPostSummary}
            </p>
          </Col>
        </Row>
        <Row className="mb-3 text-center">
          <Col>
            <p>
              <span
                data-testid="blog-post-published-time"
                className="text-muted me-3"
              >
                {strapiData.publishedAt.split('T')[0]}
              </span>
              <span className="text-muted me-3">&#9679;</span>
              <span data-testid="blog-post-author" className="text-muted">
                {strapiData.author}{' '}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Markdown rawMarkdown={strapiData.blogPostBody} />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default BlogPostTemplatePage;
