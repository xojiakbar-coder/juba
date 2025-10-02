// General types

// XMLHttpRequest types

// HttpResponse, similar to AxiosResponse
export interface HttpResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: unknown;
  request?: unknown;
}

// HttpPromise, similar to AxiosPromise
export type HttpPromise<T = any> = Promise<HttpResponse<T>>;

// HttpError, similar to AxiosError
export type HttpError<T = any> = {
  data: T;
  status: number;
  statusText: string;
  request?: unknown;
};
