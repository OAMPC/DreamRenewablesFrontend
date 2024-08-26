import landingPageResponse from '../../../../fixtures/landingPageStrapiResponse.json';

export default function navigationBarFactory() {
  const landingPageUrl = `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImage.image&populate[1]=videoSection`;
  const mockData = landingPageResponse;
  const emptyMockData = {
    data: {
      attributes: undefined,
    },
  };

  return { landingPageUrl, mockData, emptyMockData };
}
