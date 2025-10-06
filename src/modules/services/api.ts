import { AxiosPromise } from 'axios';
import { http } from '@/core/services';

import * as Types from './types';

export const Services = (): AxiosPromise<Types.IApi.Response> => http.public.get('/service/');

export const ServiceDetailById = (service_id: number): AxiosPromise<Types.IApi.ServiceDetailResponse> =>
  http.public.get(`/service/${service_id}/detail/`);

export const ServicePricing = (service_id: number): AxiosPromise<Types.IApi.ServicePricingResponse> =>
  http.public.get(`/service/${service_id}/pricing/`);

export const ServiceSubDetail = (service_id: number): AxiosPromise<Types.IApi.ServiceSubDetailResponse> =>
  http.public.get(`/service/${service_id}/sub-detail/`);

export const ServiceWorks = (service_id: number): AxiosPromise<Types.IApi.ServiceWorksResponse> =>
  http.public.get(`/service/${service_id}/works/`);

export const ServiceKeys = (service_id: number): AxiosPromise<Types.IApi.ServiceKeysResponse> =>
  http.public.get(`/service/keys/${service_id}/`);

export const ServicePricingById = (service_id: number): AxiosPromise<Types.IApi.ServicePricingByIdResponse> =>
  http.public.get(`/service/pricing/${service_id}/`);

export const ServiceSolo = (service_id: number): AxiosPromise<Types.IApi.ServiceSoloResponse> =>
  http.public.get(`/service/solo/${service_id}/`);

export const ServiceTypeBottom = (service_id: number): AxiosPromise<Types.IApi.ServiceTypeResponse> =>
  http.public.get(`/service/type/${service_id}/bottom/`);

export const ServiceTypeTop = (service_id: number): AxiosPromise<Types.IApi.ServiceTypeResponse> =>
  http.public.get(`/service/type/${service_id}/top/`);
