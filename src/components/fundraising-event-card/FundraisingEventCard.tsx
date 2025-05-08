import React from 'react';
import { FundraisingEventTemplatePageStrapiContent } from '../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePageStrapiContent';
import { Link } from 'react-router-dom';
import { Col, Row, Image, Container } from 'react-bootstrap';
import styles from './fundraisingEventCard.module.scss';

type Props = {
  eventData: FundraisingEventTemplatePageStrapiContent;
};

const FundraisingEventCard: React.FC<Props> = ({ eventData }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div data-testid="fundraising-event-card" className="h-100">
      <Link
        to={`/fundraising-event/${eventData.url}`}
        className="rounded-3 text-decoration-none h-100"
        data-testid="event-card-link"
        onClick={handleLinkClick}
      >
        <div
          className="d-flex flex-column rounded-3 h-100 p-3 shadow text-dark"
          data-testid="event-card"
        >
          <Row>
            <Col>
              <div className="mb-3 d-flex justify-content-center">
                <Image
                  fluid
                  data-testid={`event-card-image-${eventData.url}`}
                  src={eventData.landingImage.data.attributes.url}
                  className={`${styles.eventCardImage} d-flex object-fit-cover rounded-3`}
                />
              </div>
            </Col>
          </Row>
          <Container className="d-flex flex-column flex-grow-1">
            <Row className="mb-1">
              <Col>
                <h2
                  data-testid={`event-card-title-${eventData.url}`}
                  className="fs-3 fw-bold mb-1"
                >
                  {eventData.eventTitle}
                </h2>
              </Col>
            </Row>
            <Row className="mt-auto">
              <Col className="col-auto">
                <span
                  data-testid={`event-card-date-${eventData.url}`}
                  className="text-muted"
                >
                  {eventData.eventDate}
                </span>
              </Col>
              <Col className="col-auto">
                <span className="text-muted">&#9679;</span>
              </Col>
              <Col>
                <span
                  data-testid={`event-card-contact-${eventData.url}`}
                  className="text-muted"
                >
                  {eventData.contactEmail}
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </Link>
    </div>
  );
};

export default FundraisingEventCard;
