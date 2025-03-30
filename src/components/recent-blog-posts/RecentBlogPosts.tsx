import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Col } from 'react-bootstrap';
import { getRecentBlogPosts } from '../../api/strapiApi';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import BlogCard from '../blog-card/BlogCard';
import Loading from '../loading/Loading';

type Props = {
  currentBlogPageSlug: string;
};

const RecentBlogPosts: React.FC<Props> = ({ currentBlogPageSlug }) => {
  const { data, isPending, error } =
    useQuery<BlogPostsTemplatePageStrapiContent>({
      queryKey: [`RecentBlogPosts`],
      queryFn: () => getRecentBlogPosts(currentBlogPageSlug),
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  const recentPosts = data.data.slice(0, 3);

  return (
    <>
      {recentPosts.map((post, index) => (
        <Col key={index} md={4} xs={12} className="justify-content-center mb-3">
          <BlogCard strapiData={post.attributes} />
        </Col>
      ))}
    </>
  );
};

export default RecentBlogPosts;
