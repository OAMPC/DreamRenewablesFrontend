import React from 'react';
import { OurDonor } from '../../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { Col, Row, Image } from 'react-bootstrap';
import styles from './ourDonorspageDonor.module.scss';

type Props = {
  ourDonor: OurDonor;
};

const OurDonorsPageDonor: React.FC<Props> = ({ ourDonor }) => {
  return (
    <div
      className="d-flex flex-column shadow-sm rounded-4 p-3 h-100"
      data-testid="our-donor-page-donor"
    >
      <div className="flex-grow-2 d-flex flex-column">
        <Row>
          <Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <Image
                  data-testid="our-donor-page-donor-logo"
                  className={`${styles.donorLogo} mb-md-3 rounded-4 shadow-lg mb-4 mb-lg-3`}
                  fluid
                  src={ourDonor.logo.data.attributes.url}
                  alt={ourDonor.logo.data.attributes.alternativeText}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <h3 data-testid="our-donor-page-donor-name" className="fw-bold">
                  {ourDonor.name}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p data-testid="our-donor-page-donor-description">
                  {ourDonor.description}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurDonorsPageDonor;
