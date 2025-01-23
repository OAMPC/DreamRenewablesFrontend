import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';
import ReactMarkdown from 'react-markdown';

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
            <h1 className="fs-1 fw-bold text-center">{strapiData.title}</h1>
            <p className="fs-5 text-center">{strapiData.blogPostSummary}</p>
          </Col>
        </Row>
        <Row className="mb-3 text-center">
          <Col>
            <p>
              <span className="text-muted me-3">
                {strapiData.publishedAt.split('T')[0]}
              </span>
              <span className="text-muted me-3">&#9679;</span>
              <span className="text-muted">{strapiData.author} </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMarkdown
              components={{
                img: ({ ...props }) => (
                  <div className="d-flex justify-content-center">
                    <img {...props} />
                  </div>
                ),
              }}
            >
              {strapiData.blogPostBody}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default BlogPostTemplatePage;
