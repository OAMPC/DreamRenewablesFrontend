import React from 'react';
import { OurDonor } from '../../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './ourDonorspageDonor.scss';

type Props = {
  ourDonor: OurDonor;
};

const OurDonorsPageDonor: React.FC<Props> = ({ ourDonor }) => {
  return (
    <div className="mb-5" data-testid="our-donor-page-donor">
      <Bs.Row>
        <Bs.Col>
          <Bs.Row>
            <Bs.Col className="d-flex justify-content-center">
              <div className="our-donor-page-donor-logo-accent">
                <Bs.Image
                  data-testid="our-donor-page-donor-logo"
                  className="mb-md-3 our-donor-page-donor-logo"
                  fluid
                  src={ourDonor.logo.data.attributes.url}
                  alt={ourDonor.logo.data.attributes.alternativeText}
                />
              </div>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="text-center text-md-start">
              <h3 data-testid="our-donor-page-donor-name" className="fw-bold">
                {ourDonor.name}
              </h3>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="text-center text-md-start">
              <p data-testid="our-donor-page-donor-description">
                {ourDonor.description}
              </p>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurDonorsPageDonor;
