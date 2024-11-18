import { OurTeamPageStrapiContent } from '../../../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import ourTeamPageStrapiResponse from '../../../../fixtures/ourTeamPageStrapiResponse.json';
import BaseFactory from '../BaseFactory';

class OurTeamPageFactory extends BaseFactory<OurTeamPageStrapiContent> {
  constructor() {
    super(
      ourTeamPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-team-page?populate[0]=departmentSections&populate[1]=departmentSections.teamProfileDetails&populate[2]=departmentSections.teamProfileDetails.profileImage`
    );
  }
}

export default OurTeamPageFactory;
