import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Row, Col } from 'react-bootstrap';
import AboutUsPageLandingCardDesktop from '../../components/about-us-page/about-us-page-landing-card/desktop/AboutUsPageLandingCardDesktop';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import AboutUsPageLandingCardMobile from '../../components/about-us-page/about-us-page-landing-card/mobile/AboutUsPageLandingCardMobile';
import AboutUsPageSection from '../../components/about-us-page/about-us-page-section/AboutUsPageSection';
import AboutUsPageImageButtonsSection from '../../components/about-us-page/about-us-page-image-buttons-section/aboutUsPageImageButtonsSection';

const AboutUsPage: React.FC = () => {
  const { aboutUsPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <AboutUsPageLandingCardDesktop
              landingImage={aboutUsPageStrapiData.landingImage}
            />
          </div>
          <div className="d-sm-none">
            <AboutUsPageLandingCardMobile
              landingImage={aboutUsPageStrapiData.landingImage}
            />
          </div>
        </Col>
      </Row>
      {aboutUsPageStrapiData.sections.map((section, index) => (
        <Row key={index} className="mb-5">
          <Col>
            <AboutUsPageSection sectionData={section} rowIndex={index} />
          </Col>
        </Row>
      ))}
      <Row className="mb-5">
        <Col>
          <AboutUsPageImageButtonsSection
            imageButtonSectionData={aboutUsPageStrapiData.imageButtonSection}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default AboutUsPage;
