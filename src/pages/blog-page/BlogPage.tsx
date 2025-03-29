import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router-dom';
import { getBlogPostStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import BlogPostTemplatePage from '../blog-post-template-page/BlogPostTemplatePage';
import { BlogPostsTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';

const BlogPage: React.FC = () => {
  const { slug } = useParams();

  const { data, isPending, error } =
    useQuery<BlogPostsTemplatePageStrapiContent>({
      queryKey: [`BlogPage-${slug}`],
      queryFn: () => getBlogPostStrapiData(slug!),
      enabled: !!slug,
    });

  if (!slug) return <Navigate to="/404" replace />;
  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return <BlogPostTemplatePage strapiData={data.data[0].attributes} />;
};

export default BlogPage;
