import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';
import Markdown from '../../components/markdown/Markdown';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import BlogCard from '../../components/blog-card/BlogCard';
import styles from './blogPostTemplatePage.module.scss';

type Props = {
  strapiData: BlogPostTemplatePageStrapiContent;
  recentBlogPosts: BlogPostsTemplatePageStrapiContent;
};

const BlogPostTemplatePage: React.FC<Props> = ({
  strapiData,
  recentBlogPosts,
}) => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="mb-3 d-flex justify-content-center">
            <Image
              fluid
              data-testid="landing-image"
              src={strapiData.landingImage.data.attributes.url}
              className={`${styles.landingImage} rounded-3 d-flex justify-content-center`}
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
          <Col className="mb-3">
            <Markdown rawMarkdown={strapiData.blogPostBody} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 className="fs-5 mb-3">Previous Posts</h2>
          </Col>
        </Row>
        <Row data-testid="blog-grid">
          {recentBlogPosts.data.map((post, index) => (
            <Col
              key={index}
              md={4}
              xs={12}
              className="justify-content-center mb-3"
            >
              <BlogCard
                strapiData={post.attributes}
                data-testid="previous-post-blog-card"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default BlogPostTemplatePage;
