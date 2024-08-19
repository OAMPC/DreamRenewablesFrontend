import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface NavigationBarStrapiContent {
  brandImage: ImageStrapiContent;
  standardLinks: Array<StandardLink>;
  dropdownLinks: Array<DropdownLink>;
  button: Button;
}

interface StandardLink {
  linkString: string;
  linkSlug: string;
}

interface DropdownLink {
  dropdownLinkSlug: string;
  dropdownLinkString: string;
  nestedLinks: Array<StandardLink>;
}

interface Button {
  buttonSlug: string;
  buttonString: string;
}
