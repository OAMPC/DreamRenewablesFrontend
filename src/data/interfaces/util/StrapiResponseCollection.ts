export interface StrapiResponseCollection<T> {
  data: Array<{
    attributes: T;
  }>;
}
