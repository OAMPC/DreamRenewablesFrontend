import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import OurMissionVisionAndValuesPageMissionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-mission-section/OurMissionVisionAndValuesPageMissionSection';
import OurMissionVisionAndValuesPageVisionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-vision-section/OurMissionVisionAndValuesPageVisionSection';
import OurMissionVisionAndValuesPageValuesSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-values-section/OurMissionVisionAndValuesPageValuesSection';
import { Col, Row } from 'react-bootstrap';

const OurMissionVisionAndValuesPage: React.FC = () => {
  const { ourMissionVisionAndValuesStrapiData } = useLoaderData() as LoaderData;

  return (
    <PageWrapper>
      <Row className="mt-5 mb-2">
        <Col className="text-center">
          <h1 className="fs-1 fw-bold">
            {ourMissionVisionAndValuesStrapiData.pageTitle}
          </h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          <p className="fs-4">
            {ourMissionVisionAndValuesStrapiData.pageSubTitle}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageMissionSection
            ourMissionSection={
              ourMissionVisionAndValuesStrapiData.ourMissionSection
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageVisionSection
            ourVisionSection={
              ourMissionVisionAndValuesStrapiData.ourVisionSection
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <OurMissionVisionAndValuesPageValuesSection
            ourValuesSection={
              ourMissionVisionAndValuesStrapiData.ourValuesSection
            }
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurMissionVisionAndValuesPage;
