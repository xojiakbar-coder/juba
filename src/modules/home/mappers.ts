import { get } from 'radash';
import * as Types from './types';

export const Slider = (src: Types.IApi.Response): Types.IEntity.Slider => {
  return {
    uz: {
      id: get(src, 'uz.id', 0),
      title: get(src, 'uz.title', ''),
      photo: get(src, 'uz.photo', ''),
      description: get(src, 'uz.description', ''),
      short_description: get(src, 'uz.short_description', '')
    },
    ru: {
      id: get(src, 'ru.id', 0),
      title: get(src, 'ru.title', ''),
      photo: get(src, 'ru.photo', ''),
      description: get(src, 'ru.description', ''),
      short_description: get(src, 'ru.short_description', '')
    }
  };
};
