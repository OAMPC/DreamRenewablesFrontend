import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row, Image, Container, Button } from 'react-bootstrap';
import Markdown from '../../components/markdown/Markdown';
import { FundraisingEventTemplatePageStrapiContent } from '../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePageStrapiContent';
import style from './FundraisingEventTemplatePage.module.scss';

type Props = {
  strapiData: FundraisingEventTemplatePageStrapiContent;
};

const FundraisingEventTemplatePage: React.FC<Props> = ({ strapiData }) => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <div className="mb-3 d-flex justify-content-center">
            <Image
              fluid
              data-testid="landing-image"
              src={strapiData.landingImage.data.attributes.url}
              className={`${style.landingImage} rounded-3 d-flex justify-content-center`}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col xl={4} md={6} xs={12}>
          <Row className="">
            <Col>
              <p
                data-testid="fundraising-event-date"
                className="fs-5 text-center"
              >
                <i className="bi bi-calendar-event me-2"></i>
                {strapiData.eventDate}
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h1
                data-testid="fundraising-event-title"
                className="fs-1 fw-bold text-center"
              >
                {strapiData.eventTitle}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Markdown rawMarkdown={strapiData.eventDescription} />
            </Col>
          </Row>
          <Row>
            <p>
              If your unsure about anything or just need something clarifying,
              don’t hesitate to get in touch.
            </p>
          </Row>
          <Row>
            <Col>
              <p className="fs-5 fw-bold text-break">
                <i className="bi bi-envelope me-3"></i>
                {strapiData.contactEmail}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      {strapiData.signUpInfo &&
        strapiData.signUpInfo.title &&
        strapiData.signUpInfo.signUpLink && (
          <div className={`${style.signUpBanner} w-100 py-3`}>
            <Container className="d-flex justify-content-center">
              <div className="bg-white rounded-3 p-4 w-75">
                <Row>
                  <Col>
                    <p className="text-center fs-3 fw-bold">
                      {strapiData.signUpInfo.title}
                    </p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Button
                      href={strapiData.signUpInfo.signUpLink}
                      className={`${style.primaryButton} d-flex justify-content-center btn-effect`}
                    >
                      Sign Up
                    </Button>
                  </Col>
                </Row>
                <Row className="">
                  <Col>
                    <Button
                      href="/contact"
                      data-testid="contact-us-button"
                      className={`${style.secondaryButton} d-flex justify-content-center btn-effect`}
                    >
                      Contact Us
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        )}
    </PageWrapper>
  );
};

export default FundraisingEventTemplatePage;
