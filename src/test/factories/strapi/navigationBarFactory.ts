import navigationBarResponse from '../../../../fixtures/navigationBarResponse.json';

export default function navigationBarFactory() {
  const navBarUrl = `${import.meta.env.VITE_BASE_URL}/api/navigation-bar?populate[0]=brandImage&populate[1]=standardLinks&populate[2]=dropdownLinks.nestedLinks&populate[3]=button`;
  const mockData = navigationBarResponse;
  const emptyNavBarMockData = {
    data: {
      attributes: undefined,
    },
  };

  return { navBarUrl, mockData, emptyNavBarMockData };
}
