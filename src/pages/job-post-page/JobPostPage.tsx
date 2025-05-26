import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router-dom';
import { getJobPostStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { JobPostsTemplatePageStrapiContent } from '../../data/interfaces/job-post-template-page/JobPostTemplatePagesStrapiContent';
import JobPostTemplatePage from '../job-post-template-page/JobPostTemplatePage';

const JobPostPage: React.FC = () => {
  const { slug } = useParams();

  const { data, isPending, error } =
    useQuery<JobPostsTemplatePageStrapiContent>({
      queryKey: [`JobPostPage-${slug}`],
      queryFn: () => getJobPostStrapiData(slug!),
      enabled: !!slug,
    });

  if (!slug) return <Navigate to="/404" replace />;
  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return <JobPostTemplatePage strapiData={data.data[0].attributes} />;
};

export default JobPostPage;
