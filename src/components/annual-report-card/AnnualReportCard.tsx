import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';
import styles from './annualReportCard.module.scss';
import { AnnualReportStrapiContent } from '../../data/interfaces/annual-reports-page/AnnualReportStrapiContent';

type Props = {
  reportData: AnnualReportStrapiContent;
};

const AnnualReportCard: React.FC<Props> = ({ reportData }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div data-testid="annual-report-card" className="h-100">
      <Link
        to={reportData.link}
        className="rounded-3 text-decoration-none h-100"
        data-testid={`annual-report-card-link-${reportData.title}`}
        onClick={handleLinkClick}
      >
        <div className="d-flex flex-column rounded-3 h-100 p-3 shadow text-dark">
          <Row>
            <Col>
              <div className="mb-3 d-flex justify-content-center">
                <Image
                  fluid
                  data-testid={`annual-report-card-image-${reportData.title}`}
                  src={reportData.cardImage.data.attributes.url}
                  className={`${styles.annualReportCardImage} d-flex object-fit-cover rounded-3`}
                />
              </div>
            </Col>
          </Row>
          <Container className="d-flex flex-column flex-grow-1">
            <Row className="mb-1">
              <Col>
                <h1
                  data-testid={`annual-report-card-title-${reportData.title}`}
                  className="fs-2 fw-bold mb-1"
                >
                  {reportData.title}
                </h1>
                <p
                  data-testid={`annual-report-card-description-${reportData.title}`}
                  className="fs-6 mb-1"
                >
                  {reportData.description}
                </p>
              </Col>
            </Row>
            <Row className="mt-auto">
              <Col className="col-auto">
                <span
                  data-testid={`annual-report-card-date-${reportData.title}`}
                  className="text-muted"
                >
                  {reportData.datePublished}
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </Link>
    </div>
  );
};

export default AnnualReportCard;
