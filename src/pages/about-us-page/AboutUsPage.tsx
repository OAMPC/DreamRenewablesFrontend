import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import * as Bs from 'react-bootstrap';
import AboutUsPageLandingCardDesktop from '../../components/about-us-page/about-us-page-landing-card/desktop/AboutUsPageLandingCardDesktop';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import AboutUsPageLandingCardMobile from '../../components/about-us-page/about-us-page-landing-card/mobile/AboutUsPageLandingCardMobile';
import AboutUsPageOurStorySection from '../../components/about-us-page/about-us-page-our-story-section/AboutUsPageOurStorySection';

const AboutUsPage: React.FC = () => {
  const { aboutUsPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Bs.Row>
        <Bs.Col>
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
        </Bs.Col>
      </Bs.Row>
      {aboutUsPageStrapiData.sections.map((section, index) => (
        <Bs.Row key={index} className="mb-5">
          <Bs.Col>
            <AboutUsPageOurStorySection
              sectionData={section}
              rowIndex={index}
            />
          </Bs.Col>
        </Bs.Row>
      ))}
    </PageWrapper>
  );
};

export default AboutUsPage;
