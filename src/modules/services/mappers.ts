import { get } from 'radash';
import * as Types from './types';

// service list
export const Service = (src: Types.IEntity.Services): Types.IEntity.Services => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  description: get(src, 'short_description', '')
});

export const Services = (src: Types.IQuery.ServicesList): Types.IEntity.Services[] => src.map(item => Service(item));

// detail
export const ServiceDetail = (src: Types.IEntity.ServiceDetail): Types.IEntity.ServiceDetail => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  description: get(src, 'description', ''),
  full_description: get(src, 'full_description', '')
});

export const ServiceDetailById = (src: Types.IEntity.ServiceDetailById[]): Types.IEntity.ServiceDetailById[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    detail_title: get(item, 'detail_title', ''),
    detail_description: get(item, 'detail_description', ''),
    tab_title: get(item, 'tab_title', '')
  }));

// pricing
export const ServicePricing = (src: Types.IEntity.ServicePricing[]): Types.IEntity.ServicePricing[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    price: get(item, 'price', 0),
    title: get(item, 'title', ''),
    description: get(item, 'description', '')
  }));

// sub-detail
export const ServiceSubDetail = (src: Types.IEntity.ServiceSubDetail): Types.IEntity.ServiceSubDetail => ({
  id: get(src, 'id', 0),
  detail_sub_title: get(src, 'detail_sub_title', ''),
  detail_sub_description: get(src, 'detail_sub_description', '')
});

// works
export const ServiceWorks = (src: Types.IEntity.ServiceWorks[]): Types.IEntity.ServiceWorks[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    services: get(item, 'services', ''),
    description: get(item, 'description', ''),
    photo: get(item, 'photo', '')
  }));

// keys
export const ServiceKeys = (src: Types.IEntity.ServiceKeys[]): Types.IEntity.ServiceKeys[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    title: get(item, 'title', ''),
    photo: get(item, 'photo', ''),
    service: get(item, 'service', ''),
    url: get(item, 'url', null),
    hashtags: get(item, 'hashtags', [])
  }));

// pricing/{id}
export const ServicePricingById = (src: Types.IEntity.ServicePricingById[]): Types.IEntity.ServicePricingById[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    price: get(item, 'price', 0),
    title: get(item, 'title', ''),
    description: get(item, 'description', '')
  }));

// solo
export const ServiceSolo = (src: Types.IEntity.ServiceSolo[]): Types.IEntity.ServiceSolo[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    title: get(item, 'title', ''),
    description: get(item, 'description', ''),
    photo: get(item, 'photo', '')
  }));

// type (bottom/top)
export const ServiceType = (src: Types.IEntity.ServiceType[]): Types.IEntity.ServiceType[] =>
  src.map(item => ({
    id: get(item, 'id', 0),
    title: get(item, 'title', ''),
    services: get(item, 'services', ''),
    description: get(item, 'description', ''),
    photo: get(item, 'photo', ''),
    is_top: get(item, 'is_top', false)
  }));
