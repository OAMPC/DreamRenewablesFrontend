import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import OurWorkPageLandingCardDesktop from '../../components/our-work-page/our-work-page-landing-card/desktop/OurWorkPageLandingCardDesktop';
import OurWorkPageLandingCardMobile from '../../components/our-work-page/our-work-page-landing-card/mobile/OurWorkPageLandingCardMobile';

const OurWorkPage: React.FC = () => {
  const { ourWorkPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <OurWorkPageLandingCardDesktop
              landingImage={ourWorkPageStrapiData.landingImage}
            />
          </div>
          <div className="d-sm-none">
            <OurWorkPageLandingCardMobile
              landingImage={ourWorkPageStrapiData.landingImage}
            />
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurWorkPage;
