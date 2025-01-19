import axios from 'axios';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export async function fetchStrapiData(endpoint: string, query = {}) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/${endpoint}?${query}`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export async function fetchAllStrapiData(endpoint: string, query = {}) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/${endpoint}?${query}`,
      strapiConfig
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}
