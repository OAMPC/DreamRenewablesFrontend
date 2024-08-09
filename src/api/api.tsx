import axios from 'axios';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

async function GetStrapiData() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/hello-worlds`,
      strapiConfig
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export default GetStrapiData;
