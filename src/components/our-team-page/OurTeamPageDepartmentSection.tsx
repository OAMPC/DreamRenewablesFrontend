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
      <Row className="d-flex justify-content-center align-items-stretch">
        {departmentSection.teamProfileDetails.map(
          (teamProfileDetail, index) => (
            <Col
              xl="2"
              md="4"
              xs="12"
              key={index}
              className="d-flex mb-5 mb-xl-3"
            >
              <div className="d-flex flex-column flex-grow-2 shadow-sm rounded-4 p-3 h-100">
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Image
                      data-testid="department-section-profile-image"
                      className={`${styles.departmentSectionProfileImage} rounded-5 shadow-lg mb-md-3 mb-4`}
                      fluid
                      src={teamProfileDetail.profileImage.data.attributes.url}
                      alt={
                        teamProfileDetail.profileImage.data.attributes
                          .alternativeText
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4
                      data-testid="department-section-profile-name"
                      className=" fs-3 fw-bold text-center"
                    >
                      {teamProfileDetail.profileName}
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p
                      data-testid="department-section-profile-description"
                      className="text-center"
                    >
                      {teamProfileDetail.profileDescription}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default OurTeamPageDepartmentSection;
