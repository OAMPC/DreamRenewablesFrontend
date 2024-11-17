import { OurMissionVisionAndValuesPageStrapiContent } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import ourMissionVisionAndValuesPageResponse from '../../../../fixtures/ourMissionVisionAndValuesPageResponse.json';
import BaseFactory from '../BaseFactory';

class OurMissionVisionAndValuesPageFactory extends BaseFactory<OurMissionVisionAndValuesPageStrapiContent> {
  constructor() {
    super(
      ourMissionVisionAndValuesPageResponse,
      `${import.meta.env.VITE_BASE_URL}/api/mission-vision-and-values-page?populate[0]=ourMissionSection.titleIcon&populate[1]=ourMissionSection.sectionImage&populate[2]=ourVisionSection.titleIcon&populate[3]=ourVisionSection.sectionImage&populate[4]=ourValuesSection.titleIcon&populate[5]=ourValuesSection.sectionImage&populate[6]=ourValuesSection.ourValuesEntries `
    );
  }
}

export default OurMissionVisionAndValuesPageFactory;
