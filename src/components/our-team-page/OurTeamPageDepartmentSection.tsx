import React from 'react';
import { DepartmentSection } from '../../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import styles from './ourTeamPageDepartmentSection.module.scss';
import { Col, Row, Image } from 'react-bootstrap';

type Props = {
  departmentSection: DepartmentSection;
};

const OurTeamPageDepartmentSection: React.FC<Props> = ({
  departmentSection,
}) => {
  return (
    <div className="mb-5" data-testid="department-section">
      <Row>
        <Col>
          <div className="text-center">
            <h3
              data-testid="department-section-title"
              className="mb-3 mb-md-5 fs-3 fw-bolder"
            >
              {departmentSection.title}
            </h3>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm="12" xl="8">
          <Row className="d-flex justify-content-center">
            {departmentSection.teamProfileDetails.map(
              (teamProfileDetail, index) => (
                <Col sm="6" md="4" lg="2" key={index} className="mb-3">
                  <Row>
                    <Col className="d-flex justify-content-center justify-content-md-start">
                      <div
                        className={styles.departmentSectionProfileImageAccent}
                      >
                        <Image
                          data-testid="department-section-profile-image"
                          className="mb-0"
                          fluid
                          src={
                            teamProfileDetail.profileImage.data.attributes.url
                          }
                          alt={
                            teamProfileDetail.profileImage.data.attributes
                              .alternativeText
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4
                        data-testid="department-section-profile-name"
                        className="mb-3 fs-3 fw-bold text-center text-md-start"
                      >
                        {teamProfileDetail.profileName}
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p
                        data-testid="department-section-profile-description"
                        className="text-center text-md-start mb-5"
                      >
                        {teamProfileDetail.profileDescription}
                      </p>
                    </Col>
                  </Row>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OurTeamPageDepartmentSection;
