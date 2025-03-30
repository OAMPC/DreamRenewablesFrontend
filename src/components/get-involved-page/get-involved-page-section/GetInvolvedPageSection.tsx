import React from 'react';
import { Section } from '../../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { Col, Container, Nav, Row, Image } from 'react-bootstrap';

type Props = {
  sectionData: Section;
  rowIndex: number;
};

const GetInvolvedPageSection: React.FC<Props> = ({ sectionData, rowIndex }) => {
  return (
    <Container className="mb-5">
      <Row className="gx-5">
        <Col
          className={`${rowIndex % 2 == 0 ? 'order-xl-first' : 'order-xl-last'} order-last`}
          xs="12"
          xl="6"
        >
          <Row className="mt-xl-5">
            <Col className="text-center text-xl-start">
              <h2
                data-testid="get-involved-page-section-title"
                className="mt-lg-4 mb-lg-5 mb-0 fs-1 fw-bolder rounded-5"
              >
                {sectionData.title}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-xl-start">
              <p data-testid="get-involved-page-section-description">
                {sectionData.description}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center justify-content-xl-start">
              <Nav.Link
                data-testid="get-involved-page-section-link"
                href={sectionData.link.linkSlug}
              >
                {sectionData.link.linkString}
                <Image
                  loading="lazy"
                  className="ms-2 mb-2"
                  src={sectionData.linkIcon.data.attributes.url}
                  alt={sectionData.linkIcon.data.attributes.alternativeText}
                />
              </Nav.Link>
            </Col>
          </Row>
        </Col>
        <Col
          xs="12"
          xl="6"
          className={`${rowIndex == 0 ? 'd-none d-xl-flex justify-content-center' : 'd-flex justify-content-center'}  ${rowIndex % 2 == 0 ? 'order-xl-last' : 'order-xl-first'} order-first`}
        >
          <Image
            data-testid="get-involved-page-section-image"
            fluid
            className="mb-3 rounded-5"
            src={sectionData.image.data.attributes.url}
            alt={sectionData.image.data.attributes.alternativeText}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolvedPageSection;
