import React from 'react';
import { Section } from '../../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { Col, Container, Nav, Row, Image } from 'react-bootstrap';
import styles from './getInvolvedPageSection.module.scss';

type Props = {
  sectionData: Section;
  rowIndex: number;
};

const GetInvolvedPageSection: React.FC<Props> = ({ sectionData, rowIndex }) => {
  return (
    <Container>
      <Row className="gx-5">
        <Col
          className={`mb-5 ${rowIndex % 2 == 0 ? 'order-xl-first' : 'order-xl-last'}`}
          xs="12"
          xxl="6"
        >
          <Row className="mt-5">
            <Col className="text-center text-xl-start">
              <div className={styles.titleAccent}>
                <h2
                  data-testid="get-involved-page-section-title"
                  className="mb-lg-5 fs-1 fw-bolder mb-0"
                >
                  {sectionData.title}
                </h2>
              </div>
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
          xxl="6"
          className={`d-flex justify-content-center  ${rowIndex % 2 == 0 ? 'order-xl-last' : 'order-xl-first'}`}
        >
          <Image
            data-testid="get-involved-page-section-image"
            fluid
            src={sectionData.image.data.attributes.url}
            alt={sectionData.image.data.attributes.alternativeText}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolvedPageSection;
