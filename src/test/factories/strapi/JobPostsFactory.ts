import jobPostsStrapiResponse from '../../../../fixtures/jobPostsStrapiResponse.json';
import { JobPostTemplatePageStrapiContent } from '../../../data/interfaces/job-post-template-page/JobPostTemplatePageStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class JobPostsFactory extends BaseCollectionFactory<JobPostTemplatePageStrapiContent> {
  constructor() {
    super(
      jobPostsStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/job-posts?sort[0]=publishedAt:desc&populate[0]=landingImage&populate[1]=title&populate[2]=summary&populate[3]=contactEmail&populate[4]=publishedAt&populate[5]=description`
    );
  }
}

export default JobPostsFactory;
