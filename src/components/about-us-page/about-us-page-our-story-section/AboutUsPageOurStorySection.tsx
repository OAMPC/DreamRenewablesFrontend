import React from 'react';
import * as Bs from 'react-bootstrap';
import { Section } from '../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import './aboutUsPageOurStorySection.scss';

type Props = {
  sectionData: Section;
};

const AboutUsPageOurStorySection: React.FC<Props> = ({ sectionData }) => {
  return (
    <div>
      <Bs.Row>
        <Bs.Col
          className="mb-3"
          xs="12"
          xl={{
            span: 2,
            offset: 4,
          }}
        >
          <Bs.Row className="mt-5">
            <Bs.Col className="text-center text-xl-start">
              <h2 className="fs-1 fw-bolder">{sectionData.title}</h2>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="text-center text-xl-start">
              <p>{sectionData.description}</p>
            </Bs.Col>
          </Bs.Row>
          <Bs.Row>
            <Bs.Col className="d-flex justify-content-center justify-content-xl-start">
              <Bs.Nav.Link href={sectionData.link.linkSlug}>
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
        <Bs.Col>
          <Bs.Row>
            <Bs.Col
              className="d-flex justify-content-center justify-content-xl-start about-us-page-our-story-section-image"
              xs="12"
              xl={{ span: 4, offset: 2 }}
            >
              <Bs.Image
                fluid
                src={sectionData.image.data.attributes.url}
                alt={sectionData.image.data.attributes.alternativeText}
              />
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default AboutUsPageOurStorySection;
