import React from 'react';
import * as Bs from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import OurMissionVisionAndValuesPageMissionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-mission-section/OurMissionVisionAndValuesPageMissionSection';
import OurMissionVisionAndValuesPageVisionSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-vision-section/OurMissionVisionAndValuesPageVisionSection';
import OurMissionVisionAndValuesPageValuesSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-page-values-section/OurMissionVisionAndValuesPageValuesSection';

const OurMissionVisionAndValuesPage: React.FC = () => {
  const { ourMissionVisionAndValuesStrapiData } = useLoaderData() as LoaderData;

  return (
    <PageWrapper>
      <Bs.Row className="mt-5 mb-2">
        <Bs.Col className="text-center">
          <h1 className="fs-1 fw-bold">
            {ourMissionVisionAndValuesStrapiData.pageTitle}
          </h1>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-3">
        <Bs.Col className="text-center">
          <p className="fs-4">
            {ourMissionVisionAndValuesStrapiData.pageSubTitle}
          </p>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <OurMissionVisionAndValuesPageMissionSection
            ourMissionSection={
              ourMissionVisionAndValuesStrapiData.ourMissionSection
            }
          />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <OurMissionVisionAndValuesPageVisionSection
            ourVisionSection={
              ourMissionVisionAndValuesStrapiData.ourVisionSection
            }
          />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          <OurMissionVisionAndValuesPageValuesSection
            ourValuesSection={
              ourMissionVisionAndValuesStrapiData.ourValuesSection
            }
          />
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default OurMissionVisionAndValuesPage;
