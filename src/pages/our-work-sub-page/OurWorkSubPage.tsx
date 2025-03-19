import React from 'react';
import StatTemplatePage from '../stat-template-page/StatTemplatePage';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOurWorkSubPagesStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { StatTemplatePagesStrapiContent } from '../../data/interfaces/stat-template-page/StatTemplatePagesStrapiContent';

const OurWorkSubPage: React.FC = () => {
  const { slug } = useParams();

  const { data, isPending, error } = useQuery<StatTemplatePagesStrapiContent>({
    queryKey: [`OurWorkSubPage-${slug}`],
    queryFn: () => getOurWorkSubPagesStrapiData(slug!),
    enabled: !!slug,
  });

  if (!slug) return <p>Invalid URL</p>;
  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  return <StatTemplatePage strapiData={data.data[0].attributes} />;
};

export default OurWorkSubPage;
