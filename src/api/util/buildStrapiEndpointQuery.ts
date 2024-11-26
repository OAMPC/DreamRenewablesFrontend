export function buildStrapiEndpointQuery(params: {
  [key: string]: string | string[];
}): string {
  return Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${encodeURIComponent(v)}`).join('&');
      } else {
        return `${key}=${encodeURIComponent(value)}`;
      }
    })
    .join('&');
}
