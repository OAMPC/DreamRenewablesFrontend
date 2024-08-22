import { IconLink } from '../util/IconLink';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface FooterStrapiContent {
  image: ImageStrapiContent;
  textBody: string;
  navigationLinks: NavigationLinks;
  socialMediaLinks: SocialMediaLinks;
  contactInformation: ContactInformation;
}

interface NavigationLinks {
  navigationLinksTitle: string;
  standardLinks: Array<StandardLink>;
}

interface SocialMediaLinks {
  socialMediaLinksTitle: string;
  iconLinks: Array<IconLink>;
}

interface ContactInformation {
  contactInformationTitle: string;
  contactInformationName: string;
  icon: ImageStrapiContent;
  email: string;
}
