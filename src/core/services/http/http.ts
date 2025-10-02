import * as Types from './types';
import { METHODS } from './constants';

import configs from '@/config';
import { HttpError, HttpPromise, HttpResponse } from '@/core/types';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const xhr = new XMLHttpRequest();

export const open = ({ method, endpoint, options }: Types.Http.RequestConfig) => {
  const params = new URLSearchParams(
    Object.fromEntries(Object.entries(options?.params ?? {}).map(([key, value]) => [key, String(value)]))
  ).toString();

  const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);

  return xhr.open(method, url);
};

function send<T>(config: Types.Http.RequestConfig): HttpPromise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const accessToken = localStorage.getItem(configs.api.accessTokenKey) || '';
    const { method, endpoint, options, withAuth } = config;

    // params
    const params = new URLSearchParams(
      Object.fromEntries(
        Object.entries((options as Types.Http.BaseRequest)?.params ?? {}).map(([key, value]) => [key, String(value)])
      )
    ).toString();

    const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);

    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (withAuth) xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);

    // status tekshirish bilan
    xhr.onload = () => {
      let parsed: any;
      try {
        parsed = JSON.parse(xhr.responseText || '{}');
      } catch {
        parsed = xhr.responseText;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        const response: HttpResponse<T> = {
          data: parsed,
          status: xhr.status,
          statusText: xhr.statusText,
          headers: {},
          config: {},
          request: xhr
        };
        resolve(response);
      } else {
        // 4xx,5xx bo'lsa shu yerga tushadi
        reject({
          data: parsed,
          status: xhr.status,
          statusText: xhr.statusText,
          request: xhr
        } as HttpError);
      }
    };

    xhr.onerror = () => reject(new Error('Network error'));

    // body bor-yo‘qligini tekshirib yuboramiz
    if ((options as Types.Http.BaseRequest)?.body || (options && !(options as Types.Http.BaseRequest).params)) {
      xhr.send(JSON.stringify((options as Types.Http.BaseRequest).body ?? options));
    } else {
      xhr.send();
    }
  });
}

// HTTP client yaratamiz
const createHttpClient = (withAuth: boolean): Types.Http.HttpClient => ({
  get: (endpoint, options) => send({ method: METHODS.GET, endpoint, options, withAuth }),
  post: (endpoint, options) => send({ method: METHODS.POST, endpoint, options, withAuth }),
  put: (endpoint, options) => send({ method: METHODS.PUT, endpoint, options, withAuth }),
  patch: (endpoint, options) => send({ method: METHODS.PATCH, endpoint, options, withAuth }),
  delete: (endpoint, options) => send({ method: METHODS.DELETE, endpoint, options, withAuth })
});

const publicHttp = createHttpClient(false);
const privateHttp = createHttpClient(true);

export default { public: publicHttp, private: privateHttp };
