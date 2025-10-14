import axios from 'axios';

export const publicHttp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
});

export default { public: publicHttp };
