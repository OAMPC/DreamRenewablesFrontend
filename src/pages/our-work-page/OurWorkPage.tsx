import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../data/types/LoaderData';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';

const OurWorkPage: React.FC = () => {
  const { ourWorkPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="d-none d-sm-block mb-5">
            <LandingCardDesktop
              landingCard={ourWorkPageStrapiData.landingImage}
            />
          </div>
          <div className="d-sm-none">
            <LandingCardMobile
              landingCard={ourWorkPageStrapiData.landingImage}
            />
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default OurWorkPage;
