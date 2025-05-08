import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import FundraisingEventCard from '../../components/fundraising-event-card/FundraisingEventCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { FundraisingEventTemplatePagesStrapiContent } from '../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePagesStrapiConent';
import { getNewestToOldestFundraisingEventsStrapiData } from '../../api/strapiApi';

const FundraisingEventsHomePage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<FundraisingEventTemplatePagesStrapiContent>({
      queryKey: ['fundraisingEvents'],
      queryFn: getNewestToOldestFundraisingEventsStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1
            data-testid="fundraising-events-home-page-title"
            className="fs-1 mt-5 mt-xl-3 fw-bold"
          >
            Fundraising Events
          </h1>
        </Col>
      </Row>
      <Row data-testid="fundraising-events-grid">
        {data.data.map((event, index) => (
          <Col
            key={index}
            xl={4}
            md={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <FundraisingEventCard eventData={event.attributes} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default FundraisingEventsHomePage;
