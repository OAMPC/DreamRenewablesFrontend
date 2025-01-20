import axios from 'axios';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export async function fetchStrapiData(
  endpoint: string,
  query = {},
  returnCollection = false
) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/${endpoint}?${query}`,
      strapiConfig
    );
    return returnCollection ? response.data : response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}
