import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOurStoryPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import BlogPostTemplatePage from '../blog-post-template-page/BlogPostTemplatePage';
import { BlogPostTemplatePageStrapiContent } from '../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';

const OurStoryPage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<BlogPostTemplatePageStrapiContent>({
      queryKey: [`ourStoryPage`],
      queryFn: getOurStoryPageStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return <BlogPostTemplatePage strapiData={data} showPreviousPosts={false} />;
};

export default OurStoryPage;
