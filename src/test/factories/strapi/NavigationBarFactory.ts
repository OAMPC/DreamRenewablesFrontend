import navigationBarResponse from '../../../../fixtures/navigationBarStrapiResponse.json';
import { NavigationBarStrapiContent } from '../../../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import BaseFactory from '../BaseFactory';

class NavigationBarFactory extends BaseFactory<NavigationBarStrapiContent> {
  constructor() {
    super(
      navigationBarResponse,
      `${import.meta.env.VITE_BASE_URL}/api/navigation-bar?populate[0]=brandImage&populate[1]=standardLinks&populate[2]=dropdownLinks.nestedLinks&populate[3]=button`
    );
  }
}

export default NavigationBarFactory;
