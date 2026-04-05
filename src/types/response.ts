export type RequestParams = {
  page?: number;
  page_size?: number;
};
export interface Response<T> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}
