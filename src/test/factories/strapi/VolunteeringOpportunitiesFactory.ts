import volunteerOpportunitiesStrapiResponse from '../../../../fixtures/volunteeringOpportunitiesStrapiResponse.json';
import { JobPostTemplatePageStrapiContent } from '../../../data/interfaces/job-post-template-page/JobPostTemplatePageStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class VolunteerOpportunitiesFactory extends BaseCollectionFactory<JobPostTemplatePageStrapiContent> {
  constructor() {
    super(
      volunteerOpportunitiesStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/volunteering-opportunities?sort[0]=publishedAt:desc&populate[0]=landingImage&populate[1]=title&populate[2]=summary&populate[3]=contactEmail&populate[4]=publishedAt&populate[5]=description`
    );
  }
}

export default VolunteerOpportunitiesFactory;
