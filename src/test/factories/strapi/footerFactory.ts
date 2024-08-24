import footerResponse from '../../../../fixtures/footerStrapiResponse.json';

export default function footerFactory() {
  const footerUrl = `${import.meta.env.VITE_BASE_URL}/api/footer?populate[0]=image&populate[1]=navigationLinks.standardLinks&populate[2]=socialMediaLinks.iconLinks.icon&populate[3]=contactInformation.icon`;
  const mockData = footerResponse;
  const emptyFooterMockData = {
    data: {
      attributes: undefined,
    },
  };

  return { footerUrl, mockData, emptyFooterMockData };
}
