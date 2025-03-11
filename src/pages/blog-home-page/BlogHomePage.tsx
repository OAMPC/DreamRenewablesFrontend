import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { Col, Row } from 'react-bootstrap';
import BlogCard from '../../components/blog-card/BlogCard';
import { useQuery } from '@tanstack/react-query';
import { getBlogPostsStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { sortBlogPostsNewestToOldest } from '../../util/blogHelper';

const BlogHomePage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<BlogPostsTemplatePageStrapiContent>({
      queryKey: ['blogHomePage'],
      queryFn: getBlogPostsStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  const blogPosts = sortBlogPostsNewestToOldest(data);

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
        {blogPosts.map((post, index) => (
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
