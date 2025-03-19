import axios from 'axios';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export async function fetchStrapiData(
  endpoint: string,
  populateQuery = '',
  returnCollection = false,
  filter: string = ''
) {
  try {
    const queryParams = buildEndpointQueryParameter(filter, populateQuery);
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/${endpoint}${queryParams}`,
      strapiConfig
    );
    return returnCollection ? response.data : response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

function buildEndpointQueryParameter(
  filter: string,
  populateQuery: string
): string {
  return filter !== '' ? `?${filter}&${populateQuery}` : `?${populateQuery}`;
}
