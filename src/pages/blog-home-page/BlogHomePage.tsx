import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { Col, Row } from 'react-bootstrap';
import BlogCard from '../../components/blog-card/BlogCard';

type Props = {
  blogPages: BlogPostsTemplatePageStrapiContent;
};

const sortBlogPostsNewestToOldest = (
  blogPages: BlogPostsTemplatePageStrapiContent
) => {
  return blogPages.data.sort((a, b) => {
    const dateA = new Date(a.attributes.publishedAt);
    const dateB = new Date(b.attributes.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
};

const BlogHomePage: React.FC<Props> = ({ blogPages }) => {
  const sortedBlogPages = sortBlogPostsNewestToOldest(blogPages);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1 data-testid="blog-home-page-title" className="fs-1 fw-bold">
            Blog Posts
          </h1>
        </Col>
      </Row>
      <Row data-testid="blog-grid">
        {sortedBlogPages.map((post, index) => (
          <Col
            key={index}
            xl={4}
            md={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <BlogCard strapiData={post.attributes} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default BlogHomePage;
