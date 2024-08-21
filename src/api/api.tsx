import axios from 'axios';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

async function GetStrapiData() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/navigation-bar?populate[0]=brandImage&populate[1]=standardLinks&populate[2]=dropdownLinks.nestedLinks&populate[3]=button`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export default GetStrapiData;
