import React from 'react';
import { DepartmentSection } from '../../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import * as Bs from 'react-bootstrap';

type Props = {
  departmentSection: DepartmentSection;
};

const OurTeamPageDepartmentSection: React.FC<Props> = ({
  departmentSection,
}) => {
  return (
    <div data-testid="department-section">
      <Bs.Row>
        <Bs.Col>
          <div className="text-center">
            <h5 data-testid="department-section-title" className="fs-4">
              {departmentSection.departmentSectionTitle}
            </h5>
          </div>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default OurTeamPageDepartmentSection;
