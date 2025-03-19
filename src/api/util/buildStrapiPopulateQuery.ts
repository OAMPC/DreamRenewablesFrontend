export function buildStrapiPopulateQuery(populate: string[]): string {
  return populate
    .map((value, index) => `populate[${index}]=${encodeURIComponent(value)}`)
    .join('&');
}
