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
export class HttpError<T = any> extends Error {
  data: T;
  status: number;
  statusText: string;
  request: XMLHttpRequest;

  constructor(data: T, status: number, statusText: string, request: XMLHttpRequest) {
    super(statusText);
    this.name = 'HttpError';
    this.data = data;
    this.status = status;
    this.statusText = statusText;
    this.request = request;
  }
}
