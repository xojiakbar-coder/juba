import * as Types from './types';
import { METHODS } from './constants';

import configs from '@/config';
import { HttpError, HttpPromise, HttpResponse } from '@/core/types';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

let currentLanguage: string = 'uz'; // default til

const setContentLanguage = (lang: string) => {
  currentLanguage = lang || 'uz';
  console.log('🌍 Language yangilandi:', currentLanguage);
};

function send<T>(config: Types.Http.RequestConfig): HttpPromise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const accessToken = localStorage.getItem(configs.api.accessTokenKey) || '';
    const { method, endpoint, options, withAuth } = config;

    const params = new URLSearchParams(
      Object.fromEntries(
        Object.entries((options as Types.Http.BaseRequest)?.params ?? {}).map(([key, value]) => [key, String(value)])
      )
    ).toString();

    const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);

    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.setRequestHeader('Accept-Language', currentLanguage);
    xhr.setRequestHeader('Content-Language', currentLanguage);

    if (withAuth) xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);

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
        reject(new HttpError(parsed, xhr.status, xhr.statusText, xhr));
      }
    };

    xhr.onerror = () => reject(new Error('Network error'));

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

export { setContentLanguage };
export default { public: publicHttp, private: privateHttp };
