export interface StrapiResponse<T> {
  data: {
    attributes: T;
  };
}
