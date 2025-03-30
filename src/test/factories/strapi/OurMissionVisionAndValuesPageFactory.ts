import { OurMissionVisionAndValuesPageStrapiContent } from '../../../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import ourMissionVisionAndValuesPageStrapiResponse from '../../../../fixtures/ourMissionVisionAndValuesPageStrapiResponse.json';
import BaseFactory from '../BaseFactory';

class OurMissionVisionAndValuesPageFactory extends BaseFactory<OurMissionVisionAndValuesPageStrapiContent> {
  constructor() {
    super(
      ourMissionVisionAndValuesPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/mission-vision-and-values-page?populate[0]=sections.titleIcon&populate[1]=landingCard.image`
    );
  }
}

export default OurMissionVisionAndValuesPageFactory;
