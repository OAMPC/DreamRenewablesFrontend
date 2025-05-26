import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Col, Row, Image, Container, Button } from 'react-bootstrap';
import { JobPostTemplatePageStrapiContent } from '../../data/interfaces/job-post-template-page/JobPostTemplatePageStrapiContent';
import Markdown from '../../components/markdown/Markdown';
import styles from './jobPostTemplatePage.module.scss';

type Props = {
  strapiData: JobPostTemplatePageStrapiContent;
};

const JobDetails: React.FC<{
  strapiData: JobPostTemplatePageStrapiContent;
}> = ({ strapiData }) => (
  <Row className="mb-4 justify-content-center">
    <Col xl={6} md={8} xs={12}>
      <Row className="mb-3">
        <Col>
          <h1 data-testid="job-post-title" className="fs-1 fw-bold text-center">
            {strapiData.title}
          </h1>
          <p data-testid="job-post-summary" className="fs-5 text-center">
            {strapiData.summary}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <Markdown rawMarkdown={strapiData.description} />
          </div>
        </Col>
      </Row>
      <Row>
        <p>
          If you have any questions or need clarification, please don’t hesitate
          to get in touch.
        </p>
      </Row>
      <Row>
        <Col>
          <p
            data-testid="job-post-contact-email"
            className="fs-5 fw-bold text-break"
          >
            <i className="bi bi-envelope me-3"></i>
            {strapiData.contactEmail}
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
);

const SignUpSection: React.FC<{
  strapiData: JobPostTemplatePageStrapiContent;
}> = ({ strapiData }) => {
  if (!strapiData.signUpLink) return null;

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
            className={`${styles.signUpCard} bg-white rounded-3 p-3 shadow w-25`}
          >
            <SignUpContent strapiData={strapiData} />
          </div>
        </Container>
      </div>
    </Row>
  );
};

const SignUpContent: React.FC<{
  strapiData: JobPostTemplatePageStrapiContent;
}> = ({ strapiData }) => (
  <>
    <Row>
      <Col>
        <p className="text-center fs-3 fw-bold">Ready to apply?</p>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col>
        <Button
          href={strapiData.signUpLink}
          data-testid="job-post-sign-up-button"
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
          data-testid="job-post-contact-us-button"
          className={`${styles.secondaryButton} d-flex justify-content-center btn-effect`}
        >
          Contact Us
        </Button>
      </Col>
    </Row>
  </>
);

const JobPostTemplatePage: React.FC<Props> = ({ strapiData }) => {
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

      <JobDetails strapiData={strapiData} />
      <SignUpSection strapiData={strapiData} />
    </PageWrapper>
  );
};

export default JobPostTemplatePage;
