import React from 'react';
import { DepartmentSection } from '../../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import * as Bs from 'react-bootstrap';
import './ourTeamPageDepartmentSection.scss';

type Props = {
  departmentSection: DepartmentSection;
};

const OurTeamPageDepartmentSection: React.FC<Props> = ({
  departmentSection,
}) => {
  return (
    <div className="mb-5" data-testid="department-section">
      <Bs.Row>
        <Bs.Col>
          <div className="text-center">
            <h3
              data-testid="department-section-title"
              className="mb-3 mb-md-5 fs-3 fw-bolder"
            >
              {departmentSection.title}
            </h3>
          </div>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="d-flex justify-content-center">
        <Bs.Col sm="12" xl="8">
          <Bs.Row className="d-flex justify-content-center">
            {departmentSection.teamProfileDetails.map(
              (teamProfileDetail, index) => (
                <Bs.Col sm="6" md="4" lg="2" key={index} className="mb-3">
                  <Bs.Row>
                    <Bs.Col className="d-flex justify-content-center justify-content-md-start">
                      <div className="department-section-profile-image-accent">
                        <Bs.Image
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
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <h4
                        data-testid="department-section-profile-name"
                        className="mb-3 fs-3 fw-bold text-center text-md-start"
                      >
                        {teamProfileDetail.profileName}
                      </h4>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <p
                        data-testid="department-section-profile-description"
                        className="text-center text-md-start mb-5"
                      >
                        {teamProfileDetail.profileDescription}
                      </p>
                    </Bs.Col>
                  </Bs.Row>
                </Bs.Col>
              )
            )}
          </Bs.Row>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurTeamPageDepartmentSection;
