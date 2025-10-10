import { get } from 'radash';
import * as Types from './types';

// ✅ service list
export const Service = (src: any): Types.IEntity.Services => ({
  uz: {
    id: get(src, 'uz.id', 0),
    title: get(src, 'uz.title', ''),
    description: get(src, 'uz.short_description', '')
  },
  ru: {
    id: get(src, 'ru.id', 0),
    title: get(src, 'ru.title', ''),
    description: get(src, 'ru.short_description', '')
  }
});

export const Services = (src: any[]): Types.IEntity.Services[] => src.map(item => Service(item));

// ✅ service detail
export const ServiceDetail = (src: any): Types.IEntity.ServiceDetail => ({
  uz: {
    id: get(src, 'uz.id', 0),
    title: get(src, 'uz.title', ''),
    description: get(src, 'uz.description', ''),
    full_description: get(src, 'uz.full_description', '')
  },
  ru: {
    id: get(src, 'ru.id', 0),
    title: get(src, 'ru.title', ''),
    description: get(src, 'ru.description', ''),
    full_description: get(src, 'ru.full_description', '')
  }
});

// ✅ detail by id
export const ServiceDetailById = (src: any[]): Types.IEntity.ServiceDetailById[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      detail_title: get(item, 'uz.detail_title', ''),
      detail_description: get(item, 'uz.detail_description', ''),
      tab_title: get(item, 'uz.tab_title', '')
    },
    ru: {
      id: get(item, 'ru.id', 0),
      detail_title: get(item, 'ru.detail_title', ''),
      detail_description: get(item, 'ru.detail_description', ''),
      tab_title: get(item, 'ru.tab_title', '')
    }
  }));

// ✅ pricing
export const ServicePricing = (src: any[]): Types.IEntity.ServicePricing[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      title: get(item, 'uz.title', ''),
      description: get(item, 'uz.description', '')
    },
    ru: {
      id: get(item, 'ru.id', 0),
      title: get(item, 'ru.title', ''),
      description: get(item, 'ru.description', '')
    }
  }));

// ✅ sub-detail
export const ServiceSubDetail = (src: any): Types.IEntity.ServiceSubDetail => ({
  uz: {
    id: get(src, 'uz.id', 0),
    detail_sub_title: get(src, 'uz.detail_sub_title', ''),
    detail_sub_description: get(src, 'uz.detail_sub_description', '')
  },
  ru: {
    id: get(src, 'ru.id', 0),
    detail_sub_title: get(src, 'ru.detail_sub_title', ''),
    detail_sub_description: get(src, 'ru.detail_sub_description', '')
  }
});

// ✅ works
export const ServiceWorks = (src: any[]): Types.IEntity.ServiceWorks[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      services: get(item, 'uz.services', ''),
      description: get(item, 'uz.description', ''),
      photo: get(item, 'uz.photo', '')
    },
    ru: {
      id: get(item, 'ru.id', 0),
      services: get(item, 'ru.services', ''),
      description: get(item, 'ru.description', ''),
      photo: get(item, 'ru.photo', '')
    }
  }));

// ✅ keys
export const ServiceKeys = (src: any[]): Types.IEntity.ServiceKeys[] =>
  (src ?? []).map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      title: get(item, 'uz.title', ''),
      photo: get(item, 'uz.photo', ''),
      service: get(item, 'uz.service', ''),
      url: get(item, 'uz.url', null),
      hashtags: (get(item, 'uz.hashtags', []) as any[]).map(tag => ({
        id: get(tag, 'uz.id', 0),
        title: get(tag, 'uz.title', '')
      }))
    },
    ru: {
      id: get(item, 'ru.id', 0),
      title: get(item, 'ru.title', ''),
      photo: get(item, 'ru.photo', ''),
      service: get(item, 'ru.service', ''),
      url: get(item, 'ru.url', null),
      hashtags: (get(item, 'ru.hashtags', []) as any[]).map(tag => ({
        id: get(tag, 'ru.id', 0),
        title: get(tag, 'ru.title', '')
      }))
    }
  }));

// ✅ pricing/{id}
export const ServicePricingById = (src: any[]): Types.IEntity.ServicePricingById[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      title: get(item, 'uz.title', ''),
      price: get(item, 'uz.price', 0),
      description: get(item, 'uz.description', '')
    },
    ru: {
      id: get(item, 'ru.id', 0),
      title: get(item, 'ru.title', ''),
      price: get(item, 'ru.price', 0),
      description: get(item, 'ru.description', '')
    }
  }));

// ✅ solo
export const ServiceSolo = (src: any[]): Types.IEntity.ServiceSolo[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      title: get(item, 'uz.title', ''),
      description: get(item, 'uz.description', ''),
      photo: get(item, 'uz.photo', '')
    },
    ru: {
      id: get(item, 'ru.id', 0),
      title: get(item, 'ru.title', ''),
      description: get(item, 'ru.description', ''),
      photo: get(item, 'ru.photo', '')
    }
  }));

// ✅ type (bottom/top)
export const ServiceType = (src: any[]): Types.IEntity.ServiceType[] =>
  src.map(item => ({
    uz: {
      id: get(item, 'uz.id', 0),
      title: get(item, 'uz.title', ''),
      services: get(item, 'uz.services', ''),
      description: get(item, 'uz.description', ''),
      photo: get(item, 'uz.photo', ''),
      is_top: get(item, 'uz.is_top', false)
    },
    ru: {
      id: get(item, 'ru.id', 0),
      title: get(item, 'ru.title', ''),
      services: get(item, 'ru.services', ''),
      description: get(item, 'ru.description', ''),
      photo: get(item, 'ru.photo', ''),
      is_top: get(item, 'ru.is_top', false)
    }
  }));
