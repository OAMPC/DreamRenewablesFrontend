import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import OurMissionVisionAndValuesPageMissionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-mission-section/OurMissionVisionAndValuesPageMissionSection';
import OurMissionVisionAndValuesPageVisionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-vision-section/OurMissionVisionAndValuesPageVisionSection';
import OurMissionVisionAndValuesPageValuesSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-values-section/OurMissionVisionAndValuesPageValuesSection';
import Loading from '../../components/loading/Loading';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getOurMissionVisionAndValuesPageStrapiData } from '../../api/strapiApi';
import { OurMissionVisionAndValuesPageStrapiContent } from '../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';

const OurMissionVisionAndValuesPage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<OurMissionVisionAndValuesPageStrapiContent>({
      queryKey: ['ourTeamPage'],
      queryFn: getOurMissionVisionAndValuesPageStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 className="fs-1 fw-bold">{data.pageTitle}</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          <p className="fs-4">{data.pageSubTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageMissionSection
            ourMissionSection={data.ourMissionSection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageVisionSection
            ourVisionSection={data.ourVisionSection}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageValuesSection
            ourValuesSection={data.ourValuesSection}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurMissionVisionAndValuesPage;
