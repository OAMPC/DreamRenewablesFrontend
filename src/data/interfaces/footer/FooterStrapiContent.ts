import { IconLink } from '../util/IconLink';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface FooterStrapiContent {
  image: ImageStrapiContent;
  textBody: string;
  navigationLinks: NavigationLinks;
  socialMediaLinks: SocialMediaLinks;
}

interface NavigationLinks {
  navigationLinksTitle: string;
  standardLinks: Array<StandardLink>;
}

interface SocialMediaLinks {
  socialMediaLinksTitle: string;
  iconLinks: Array<IconLink>;
}
