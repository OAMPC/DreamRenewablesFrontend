import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import { AnnualReportsPageStrapiContent } from '../../data/interfaces/annual-reports-page/AnnualReportsPageStrapiContent';
import { getAnnualReportsPageStrapiData } from '../../api/strapiApi';
import AnnualReportCard from '../../components/annual-report-card/AnnualReportCard';

const AnnualReportsPage: React.FC = () => {
  const { data, isPending, error } = useQuery<AnnualReportsPageStrapiContent>({
    queryKey: ['AnnualReports'],
    queryFn: getAnnualReportsPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col className="text-center mb-4">
          <h1
            data-testid="annual-reports-home-page-title"
            className="fs-1 mt-5 mt-xl-3 fw-bold"
          >
            Annual Reports
          </h1>
        </Col>
      </Row>
      <Row data-testid="annual-reports-grid">
        {data.data.map((reports, index) => (
          <Col
            key={index}
            xl={4}
            md={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <AnnualReportCard reportData={reports.attributes} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default AnnualReportsPage;
