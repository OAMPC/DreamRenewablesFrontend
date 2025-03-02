import { OurMissionVisionAndValuesPageStrapiContent } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import ourMissionVisionAndValuesPageStrapiResponse from '../../../../fixtures/ourMissionVisionAndValuesPageStrapiResponse.json';
import BaseFactory from '../BaseFactory';

class OurMissionVisionAndValuesPageFactory extends BaseFactory<OurMissionVisionAndValuesPageStrapiContent> {
  constructor() {
    super(
      ourMissionVisionAndValuesPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/mission-vision-and-values-page?populate[0]=ourMissionSection.titleIcon&populate[1]=ourMissionSection.sectionImage&populate[2]=ourVisionSection.titleIcon&populate[3]=ourVisionSection.sectionImage&populate[4]=ourValuesSection.titleIcon&populate[5]=ourValuesSection.ourValuesEntries`
    );
  }
}

export default OurMissionVisionAndValuesPageFactory;
