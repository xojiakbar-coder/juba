import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

let currentLang: string = 'uz';

export const setHttpLanguage = (lang: string) => {
  console.log('🌍 http til o‘rnatildi:', lang);
  currentLang = lang || 'uz';
};

// Dinamik http
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
} as AxiosRequestConfig);

http.interceptors.request.use(config => {
  if (!config.headers) config.headers = {} as AxiosRequestHeaders;
  config.headers['Accept-Language'] = currentLang;
  config.headers['Content-Language'] = currentLang;
  return config;
});

// public ham xuddi shu
const pureHttp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
} as AxiosRequestConfig);

pureHttp.interceptors.request.use(config => {
  if (!config.headers) config.headers = {} as AxiosRequestHeaders;
  config.headers['Accept-Language'] = currentLang;
  config.headers['Content-Language'] = currentLang;
  return config;
});

export default { public: pureHttp, request: http };
