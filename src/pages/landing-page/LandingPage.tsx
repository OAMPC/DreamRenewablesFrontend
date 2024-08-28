import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { LoaderData } from '../../data/types/LoaderData';
import * as Bs from 'react-bootstrap';
import './landingPage.css';

const LandingPage: React.FC = () => {
  const { navigationBarStrapiData, footerStrapiData, landingPageStrapiData } =
    useLoaderData() as LoaderData;
  return (
    <PageWrapper
      navigationBarStrapiData={navigationBarStrapiData}
      footerStrapiData={footerStrapiData}
    >
      <div>
        <Bs.Card className="text-white landing-image-card">
          <Bs.Card.Img
            src={landingPageStrapiData.landingImage.image.data.attributes.url}
            alt="Bs.Card image"
          />

          <Bs.Card.ImgOverlay className="d-flex align-items-end">
            <Bs.Row>
              <Bs.Col xl="6" className="landing-image-card-col">
                <Bs.Card.Title className=" mb-3 landing-image-card-title">
                  {landingPageStrapiData.landingImage.title}
                </Bs.Card.Title>
                <Bs.Card.Text className="fs-3">
                  {landingPageStrapiData.landingImage.subTitle}
                </Bs.Card.Text>
              </Bs.Col>
            </Bs.Row>
          </Bs.Card.ImgOverlay>
        </Bs.Card>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
