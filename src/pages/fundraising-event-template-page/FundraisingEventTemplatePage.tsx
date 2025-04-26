import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row, Image, Container, Button } from 'react-bootstrap';
import Markdown from '../../components/markdown/Markdown';
import { FundraisingEventTemplatePageStrapiContent } from '../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePageStrapiContent';
import styles from './fundraisingEventTemplatePage.module.scss';

type Props = {
  strapiData: FundraisingEventTemplatePageStrapiContent;
};

const EventDetails: React.FC<{
  strapiData: FundraisingEventTemplatePageStrapiContent;
}> = ({ strapiData }) => (
  <Row className="mb-4 justify-content-center">
    <Col xl={4} md={6} xs={12}>
      <Row>
        <Col>
          <p data-testid="fundraising-event-date" className="fs-5 text-center">
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
          <div data-testid="event-description">
            <Markdown rawMarkdown={strapiData.eventDescription} />
          </div>
        </Col>
      </Row>
      <Row>
        <p>
          If you're unsure about anything or need clarification, don’t hesitate
          to get in touch.
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
);

const SignUpSection: React.FC<{
  strapiData: FundraisingEventTemplatePageStrapiContent;
}> = ({ strapiData }) => {
  if (!strapiData.signUpInfo?.title || !strapiData.signUpInfo?.signUpLink)
    return null;

  return (
    <Row>
      <div className={`${styles.signUpBanner} d-block d-md-none w-100 py-3`}>
        <Container className="d-flex justify-content-center">
          <div className="bg-white rounded-3 p-4 w-75">
            <SignUpContent strapiData={strapiData} />
          </div>
        </Container>
      </div>

      <div className="d-none d-md-block">
        <Container className="d-flex justify-content-center">
          <div
            className={`${styles.signUpCard} bg-white rounded-3 p-3 shadow w-25"`}
          >
            <SignUpContent strapiData={strapiData} />
          </div>
        </Container>
      </div>
    </Row>
  );
};

const SignUpContent: React.FC<{
  strapiData: FundraisingEventTemplatePageStrapiContent;
}> = ({ strapiData }) => (
  <>
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
          className={`${styles.primaryButton} d-flex justify-content-center btn-effect`}
        >
          Sign Up
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button
          href="/contact"
          data-testid="fundraising-event-contact-us-button"
          className={`${styles.secondaryButton} d-flex justify-content-center btn-effect`}
        >
          Contact Us
        </Button>
      </Col>
    </Row>
  </>
);

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
              className={`${styles.landingImage} rounded-3 d-flex justify-content-center`}
            />
          </div>
        </Col>
      </Row>

      <EventDetails strapiData={strapiData} />
      <SignUpSection strapiData={strapiData} />
    </PageWrapper>
  );
};

export default FundraisingEventTemplatePage;
