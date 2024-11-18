import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurTeamPageStrapiContent {
  pageTitle: string;
  pageSubTitle: string;
  departmentSections: Array<DepartmentSection>;
}

export interface DepartmentSection {
  departmentSectionTitle: string;
  teamProfileDetails: Array<TeamProfileDetail>;
}

export interface TeamProfileDetail {
  profileName: string;
  profileDescription: string;
  profileImage: ImageStrapiContent;
}
