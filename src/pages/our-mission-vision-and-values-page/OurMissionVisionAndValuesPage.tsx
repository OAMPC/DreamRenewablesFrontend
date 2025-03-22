import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import Loading from '../../components/loading/Loading';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getOurMissionVisionAndValuesPageStrapiData } from '../../api/strapiApi';
import { OurMissionVisionAndValuesPageStrapiContent } from '../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import OurMissionVisionAndValuesPageSection from '../../components/our-mission-vision-and-values-page/our-mission-vision-and-values-section/OurMissionVisionAndValuesSection';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';

const OurMissionVisionAndValuesPage: React.FC = () => {
  const { data, isPending, error } =
    useQuery<OurMissionVisionAndValuesPageStrapiContent>({
      queryKey: ['ourMissionVisionAndValuesPageStrapiContent'],
      queryFn: getOurMissionVisionAndValuesPageStrapiData,
    });

  if (isPending) return <Loading />;
  if (error || !data) return <p>Error Loading Data</p>;

  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={data.landingCard} />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile landingCard={data.landingCard} />
          </div>
        </Col>
      </Row>
      {data.sections.map((section, idx) => (
        <Row key={idx}>
          <Col>
            <OurMissionVisionAndValuesPageSection sectionData={section} />
          </Col>
        </Row>
      ))}
    </PageWrapper>
  );
};

export default OurMissionVisionAndValuesPage;
