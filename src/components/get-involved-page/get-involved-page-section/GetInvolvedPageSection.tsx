import React from 'react';
import * as Bs from 'react-bootstrap';
import './getInvolvedPageSection.scss';
import { Section } from '../../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';

type Props = {
  sectionData: Section;
  rowIndex: number;
};

const GetInvolvedPageSection: React.FC<Props> = ({ sectionData, rowIndex }) => {
  return (
    <Bs.Container>
      <Bs.Row className="gx-5">
        <Bs.Col
          className={`mb-5 ${rowIndex % 2 == 0 ? 'order-xl-first' : 'order-xl-last'}`}
          xs="12"
          xxl="6"
        >
          <Bs.Row className="mt-5">
            <Bs.Col className="text-center text-xl-start">
              <div className="get-involved-page-section-title-accent">
                <h2
                  data-testid="get-involved-page-section-title"
                  className="mb-lg-5 fs-1 fw-bolder mb-0"
                >
                  {sectionData.title}
                </h2>
              </div>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="text-center text-xl-start">
              <p data-testid="get-involved-page-section-description">
                {sectionData.description}
              </p>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="d-flex justify-content-center justify-content-xl-start">
              <Bs.Nav.Link
                data-testid="get-involved-page-section-link"
                href={sectionData.link.linkSlug}
              >
                {sectionData.link.linkString}
                <Bs.Image
                  loading="lazy"
                  className="ms-2 mb-2"
                  src={sectionData.linkIcon.data.attributes.url}
                  alt={sectionData.linkIcon.data.attributes.alternativeText}
                />
              </Bs.Nav.Link>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
        <Bs.Col
          xs="12"
          xxl="6"
          className={`d-flex justify-content-center  ${rowIndex % 2 == 0 ? 'order-xl-last' : 'order-xl-first'}`}
        >
          <Bs.Image
            data-testid="get-involved-page-section-image"
            fluid
            src={sectionData.image.data.attributes.url}
            alt={sectionData.image.data.attributes.alternativeText}
          />
        </Bs.Col>
      </Bs.Row>
    </Bs.Container>
  );
};

export default GetInvolvedPageSection;
