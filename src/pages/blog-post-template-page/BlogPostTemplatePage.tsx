import React from 'react';
import * as Bs from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';

type Props = {
  strapiData: BlogPostTemplatePageStrapiContent;
};

const BlogPostTemplatePage: React.FC<Props> = ({ strapiData }) => {
  const landingCardCardStyle = {
    backgroundImage: `url(${strapiData.landingImage.data.attributes.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '75vw',
    borderRadius: '25px',
  };

  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <div
              className="d-flex align-items-center justify-content-start mt-3 landing-card"
              style={landingCardCardStyle}
              data-testid="landing-image-desktop"
            ></div>
          </div>
          <div className="d-sm-none">
            <Bs.Image
              fluid
              data-testid="landing-image-mobile"
              src={strapiData.landingImage.data.attributes.url}
              className="landing-image-mobile"
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
            <span className="text-muted">
              Published on: {strapiData.publishedAt}
            </span>
          </Col>
          <Col>
            <span className="text-muted">Author: {strapiData.author}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="fs-5">{strapiData.blogPostBody}</div>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default BlogPostTemplatePage;
