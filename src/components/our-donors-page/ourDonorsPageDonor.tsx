import React from 'react';
import { OurDonor } from '../../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { Col, Row, Image } from 'react-bootstrap';
import styles from './ourDonorspageDonor.module.scss';

type Props = {
  ourDonor: OurDonor;
};

const OurDonorsPageDonor: React.FC<Props> = ({ ourDonor }) => {
  return (
    <div className="mb-5" data-testid="our-donor-page-donor">
      <Row>
        <Col>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className={styles.logoAccent}>
                <Image
                  data-testid="our-donor-page-donor-logo"
                  className="mb-md-3 rounded-4"
                  fluid
                  src={ourDonor.logo.data.attributes.url}
                  alt={ourDonor.logo.data.attributes.alternativeText}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-md-start">
              <h3 data-testid="our-donor-page-donor-name" className="fw-bold">
                {ourDonor.name}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-md-start">
              <p data-testid="our-donor-page-donor-description">
                {ourDonor.description}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OurDonorsPageDonor;
