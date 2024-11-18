import React from 'react';
import * as Bs from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import { useLoaderData } from 'react-router-dom';
import OurTeamPageDepartmentSection from '../../components/our-team-page/OurTeamPageDepartmentSection';

const OurTeamPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData, ourTeamPageStrapiData } =
    useLoaderData() as LoaderData;

  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <Bs.Row className="mt-5 mb-2">
        <Bs.Col className="text-center">
          <h1 data-testid="our-team-page-title" className="fs-1 fw-bold">
            {ourTeamPageStrapiData.pageTitle}
          </h1>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-3">
        <Bs.Col className="text-center">
          <p className="fs-4">{ourTeamPageStrapiData.pageSubTitle}</p>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row>
        <Bs.Col>
          {ourTeamPageStrapiData.departmentSections.map(
            (departmentSection, index) => (
              <OurTeamPageDepartmentSection
                key={index}
                departmentSection={departmentSection}
              />
            )
          )}
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default OurTeamPage;
