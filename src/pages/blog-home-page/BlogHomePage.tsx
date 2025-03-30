import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { Col, Row } from 'react-bootstrap';
import BlogCard from '../../components/blog-card/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { getNewestToOldestBlogPostsStrapiData } from '../../api/strapiApi';

const BlogHomePage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<BlogPostsTemplatePageStrapiContent>({
      queryKey: ['blogHomePage'],
      queryFn: getNewestToOldestBlogPostsStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1
            data-testid="blog-home-page-title"
            className="fs-1 mt-5 mt-xl-3 fw-bold"
          >
            Blog Posts
          </h1>
        </Col>
      </Row>
      <Row data-testid="blog-grid">
        {data.data.map((post, index) => (
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
