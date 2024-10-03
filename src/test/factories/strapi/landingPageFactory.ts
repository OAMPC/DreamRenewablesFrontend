import landingPageResponse from '../../../../fixtures/landingPageStrapiResponse.json';

export default function landingPageFactory() {
  const landingPageUrl = `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImageDesktop.image&populate[1]=landingImageMobile.image&populate[2]=videoSection`;
  const mockData = landingPageResponse;
  const emptyMockData = {
    data: {
      attributes: undefined,
    },
  };

  return { landingPageUrl, mockData, emptyMockData };
}
