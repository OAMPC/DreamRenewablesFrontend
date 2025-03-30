import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { getFundraisingEventStrapiData } from '../../api/strapiApi';
import FundraisingEventTemplatePage from '../fundraising-event-template-page/FundraisingEventTemplatePage';
import { FundraisingEventTemplatePagesStrapiContent } from '../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePagesStrapiConent';

const FundraisingEventPage: React.FC = () => {
  const { slug } = useParams();

  const { data, isPending, error } =
    useQuery<FundraisingEventTemplatePagesStrapiContent>({
      queryKey: [`FundraisingEvent-${slug}`],
      queryFn: () => getFundraisingEventStrapiData(slug!),
      enabled: !!slug,
    });

  if (!slug) return <Navigate to="/404" replace />;
  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return <FundraisingEventTemplatePage strapiData={data.data[0].attributes} />;
};

export default FundraisingEventPage;
