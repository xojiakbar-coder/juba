export declare namespace IApi {
  export type Response = IQuery.ServicesList;
  export type ServiceDetailResponse = IEntity.ServiceDetailById[];
  export type ServicePricingResponse = IEntity.ServicePricing[];
  export type ServiceSubDetailResponse = IEntity.ServiceSubDetail;
  export type ServiceWorksResponse = IEntity.ServiceWorks[];
  export type ServiceKeysResponse = IEntity.ServiceKeys[];
  export type ServicePricingByIdResponse = IEntity.ServicePricingById[];
  export type ServiceSoloResponse = IEntity.ServiceSolo[];
  export type ServiceTypeResponse = IEntity.ServiceType[];
}

export declare namespace IEntity {
  export interface Services {
    id: number;
    title: string;
    description: string;
  }

  export interface ServiceDetail {
    id: number;
    title: string;
    description: string;
    full_description: string;
  }
  export interface ServiceDetailById {
    id: number;
    detail_title: string;
    detail_description: string;
    tab_title: string;
  }

  export interface ServicePricing {
    id: number;
    title: string;

    description: string;
  }

  export interface ServiceSubDetail {
    id: number;
    detail_sub_title: string;
    detail_sub_description: string;
  }

  export interface ServiceWorks {
    id: number;
    photo: string;
    services: string;
    description: string;
  }

  export interface Hashtags {
    id: number;
    title: string;
  }

  export interface ServiceKeys {
    id: number;
    title: string;
    photo: string;
    service: string;
    url: string | null;
    hashtags: Hashtags[];
  }

  export interface ServicePricingById {
    id: number;
    title: string;
    price: number;
    description: string;
  }

  export interface ServiceSolo {
    id: number;
    title: string;
    description: string;
    photo: string;
  }

  export interface ServiceType {
    id: number;
    title: string;
    is_top: boolean;
    services: string;
    description: string;
    photo?: string;
  }
}

export declare namespace IQuery {
  export type ServicesList = IEntity.Services[];
}
