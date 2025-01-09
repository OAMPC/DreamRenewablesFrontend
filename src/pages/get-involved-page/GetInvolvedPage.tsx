import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { useLoaderData } from 'react-router-dom';
import LandingCardDesktop from '../../components/landing-card/desktop/LandingCardDesktop';
import LandingCardMobile from '../../components/landing-card/mobile/landingCardMobile';
import { LoaderData } from '../../data/types/LoaderData';

const GetInvolvedPage: React.FC = () => {
  const { getInvolvedPageStrapiData } = useLoaderData() as LoaderData;
  return (
    <PageWrapper>
      <Row>
        <Col>
          <Row>
            <Col>
              <div className="d-none d-sm-block mb-5">
                <LandingCardDesktop
                  landingCard={getInvolvedPageStrapiData.landingCard}
                />
              </div>
              <div className="d-sm-none">
                <LandingCardMobile
                  landingCard={getInvolvedPageStrapiData.landingCard}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default GetInvolvedPage;
