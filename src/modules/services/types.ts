export declare namespace IApi {
  export type Response = IQuery.ServicesList;
  export type ServiceDetailResponse = IEntity.ServiceDetailById[];
  export type ServicePricingResponse = IEntity.ServicePricing[];
  export type ServiceSubDetailResponse = IEntity.ServiceSubDetail[];
  export type ServiceWorksResponse = IEntity.ServiceWorks[];
  export type ServiceKeysResponse = IEntity.ServiceKeys[];
  export type ServicePricingByIdResponse = IEntity.ServicePricingById[];
  export type ServiceSoloResponse = IEntity.ServiceSolo[];
  export type ServiceTypeResponse = IEntity.ServiceType[];
}

export declare namespace IEntity {
  export interface LangCommon {
    id: number;
    title: string;
    description?: string;
    photo?: string;
    full_description?: string;
  }

  export type SingleSerivce = { id: number; title: string; description: string };

  export interface Services {
    uz: { id: number; title: string; description: string };
    ru: { id: number; title: string; description: string };
  }

  export interface ServiceDetail {
    uz: LangCommon;
    ru: LangCommon;
  }

  export interface ServiceDetailById {
    uz: { id: number; detail_title: string; detail_description: string; tab_title: string };
    ru: { id: number; detail_title: string; detail_description: string; tab_title: string };
  }

  export interface ServicePricing {
    uz: { id: number; title: string; description: string };
    ru: { id: number; title: string; description: string };
  }

  export interface ServiceSubDetail {
    uz: { id: number; detail_sub_title: string; detail_sub_description: string };
    ru: { id: number; detail_sub_title: string; detail_sub_description: string };
  }

  export interface ServiceWorks {
    uz: { id: number; services: string; description: string; photo: string };
    ru: { id: number; services: string; description: string; photo: string };
  }

  export interface Hashtags {
    id: number;
    title: string;
  }

  export interface ServiceKeys {
    uz: { id: number; title: string; photo: string; service: string; url: string | null; hashtags: Hashtags[] };
    ru: { id: number; title: string; photo: string; service: string; url: string | null; hashtags: Hashtags[] };
  }

  export interface ServicePricingById {
    uz: { id: number; title: string; price: number; description: string };
    ru: { id: number; title: string; price: number; description: string };
  }

  export interface ServiceSolo {
    uz: { id: number; title: string; description: string; photo: string };
    ru: { id: number; title: string; description: string; photo: string };
  }

  export interface ServiceType {
    uz: { id: number; title: string; is_top: boolean; services: string; description: string; photo?: string };
    ru: { id: number; title: string; is_top: boolean; services: string; description: string; photo?: string };
  }
}

export declare namespace IQuery {
  export type ServicesList = IEntity.Services[];
}
