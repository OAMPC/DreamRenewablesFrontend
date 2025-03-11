import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import OurDonorsPageDonor from '../../components/our-donors-page/ourDonorsPageDonor';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getOurDonorsPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { OurDonorsPageStrapiContent } from '../../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';

const OurDonorsPage: React.FC = () => {
  const { data, isPending, error } = useQuery<OurDonorsPageStrapiContent>({
    queryKey: ['ourDonorsPage'],
    queryFn: getOurDonorsPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 data-testid="our-donors-page-title" className="fs-1 fw-bold">
            {data.pageTitle}
          </h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2 data-testid="our-donors-page-sub-title" className="fs-4">
            {data.pageSubTitle}
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {data.ourDonors.map((donor, index) => (
          <Col xl="3" md="4" xs="12" key={index}>
            <OurDonorsPageDonor ourDonor={donor} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default OurDonorsPage;
