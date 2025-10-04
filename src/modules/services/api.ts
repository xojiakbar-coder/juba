import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';
import * as Types from './types';

// All Endpoints
export const Services = (): HttpPromise<Types.IApi.Response> => http.public.get('/service/');

export const ServiceDetailById = (service_id: number): HttpPromise<Types.IApi.ServiceDetailResponse> =>
  http.public.get(`/service/${service_id}/detail/`);

export const ServicePricing = (service_id: number): HttpPromise<Types.IApi.ServicePricingResponse> =>
  http.public.get(`/service/${service_id}/pricing/`);

export const ServiceSubDetail = (service_id: number): HttpPromise<Types.IApi.ServiceSubDetailResponse> =>
  http.public.get(`/service/${service_id}/sub-detail/`);

export const ServiceWorks = (service_id: number): HttpPromise<Types.IApi.ServiceWorksResponse> =>
  http.public.get(`/service/${service_id}/works/`);

export const ServiceKeys = (service_id: number): HttpPromise<Types.IApi.ServiceKeysResponse> =>
  http.public.get(`/service/keys/${service_id}/`);

export const ServicePricingById = (service_id: number): HttpPromise<Types.IApi.ServicePricingByIdResponse> =>
  http.public.get(`/service/pricing/${service_id}/`);

export const ServiceSolo = (service_id: number): HttpPromise<Types.IApi.ServiceSoloResponse> =>
  http.public.get(`/service/solo/${service_id}/`);

export const ServiceTypeBottom = (service_id: number): HttpPromise<Types.IApi.ServiceTypeResponse> =>
  http.public.get(`/service/type/${service_id}/bottom/`);

export const ServiceTypeTop = (service_id: number): HttpPromise<Types.IApi.ServiceTypeResponse> =>
  http.public.get(`/service/type/${service_id}/top/`);
