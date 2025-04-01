import fundraisingEventsStrapiResponse from '../../../../fixtures/fundraisingEventsStrapiResponse.json';
import { FundraisingEventTemplatePageStrapiContent } from '../../../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePageStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class FundraisingEventsFactory extends BaseCollectionFactory<FundraisingEventTemplatePageStrapiContent> {
  constructor() {
    super(
      fundraisingEventsStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/fundraising-events?sort[0]=eventDate:desc&populate[0]=landingImage&populate[1]=eventTitle&populate[2]=eventDate&populate[3]=eventDescription&populate[4]=contactEmail&populate[5]=signUpInfo.title&populate[6]=signUpInfo.signUpLink`
    );
  }
}

export default FundraisingEventsFactory;
