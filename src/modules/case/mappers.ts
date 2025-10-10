import { get } from 'radash';
import * as Types from './types';

export const Case = (src: any): Types.IEntity.Case => ({
  uz: {
    id: get(src, 'uz.id', 0),
    title: get(src, 'uz.title', ''),
    photo: get(src, 'uz.photo', ''),
    service: get(src, 'uz.service', ''),
    url: get(src, 'uz.url', null),
    hashtags: (get(src, 'uz.hashtags', []) as any[]).map(tag => ({
      id: get(tag, 'uz.id', 0),
      title: get(tag, 'uz.title', '')
    }))
  },
  ru: {
    id: get(src, 'ru.id', 0),
    title: get(src, 'ru.title', ''),
    photo: get(src, 'ru.photo', ''),
    service: get(src, 'ru.service', ''),
    url: get(src, 'ru.url', null),
    hashtags: (get(src, 'ru.hashtags', []) as any[]).map(tag => ({
      id: get(tag, 'ru.id', 0),
      title: get(tag, 'ru.title', '')
    }))
  }
});

export const CaseList = (src: Types.IQuery.CaseList): Types.IEntity.Case[] => src.map(item => Case(item));
