import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface NavigationBarStrapiContent {
  brandImage: ImageStrapiContent;
  standardLinks: Array<StandardLink>;
  dropdownLinks: Array<DropdownLink>;
  button: Button;
}

interface DropdownLink {
  id?: number;
  dropdownLinkSlug: string;
  dropdownLinkString: string;
  nestedLinks: Array<StandardLink>;
}

interface Button {
  buttonSlug: string;
  buttonString: string;
}
