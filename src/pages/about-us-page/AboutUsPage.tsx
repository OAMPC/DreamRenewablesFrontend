import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Row, Col } from 'react-bootstrap';
import AboutUsPageSection from '../../components/about-us-page/about-us-page-section/AboutUsPageSection';
import AboutUsPageImageButtonsSection from '../../components/about-us-page/about-us-page-image-buttons-section/aboutUsPageImageButtonsSection';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import { useQuery } from '@tanstack/react-query';
import { getAboutUsPageStrapiData } from '../../api/strapiApi';
import Loading from '../../components/loading/Loading';
import { AboutUsPageStrapiContent } from '../../data/interfaces/about-us-page/AboutUsPageStrapiContent';

const AboutUsPage: React.FC = () => {
  const { data, isPending, error } = useQuery<AboutUsPageStrapiContent>({
    queryKey: ['aboutUsPage'],
    queryFn: getAboutUsPageStrapiData,
  });

  if (isPending) return <Loading />;
  if (error || !data) throw new Error(`Failed to load data: ${error.message}`);

  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop landingCard={data.landingImage} />
          </div>
          <div className="d-sm-none mb-5">
            <LandingCardMobile landingCard={data.landingImage} />
          </div>
        </Col>
      </Row>
      {data.sections.map((section, index) => (
        <Row key={index} className="mb-5">
          <Col>
            <AboutUsPageSection sectionData={section} rowIndex={index} />
          </Col>
        </Row>
      ))}
      <Row className="mb-5">
        <Col>
          <AboutUsPageImageButtonsSection
            imageButtonSectionData={data.imageButtonSection}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default AboutUsPage;
