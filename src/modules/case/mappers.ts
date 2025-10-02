import { get } from 'radash';
import * as Types from './types';

// Bitta Case mapper
export const Case = (src: Types.IEntity.Case): Types.IEntity.Case => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  photo: get(src, 'photo', ''),
  service: get(src, 'service', ''),
  url: get(src, 'url', null),
  hashtags: (get(src, 'hashtags', []) as Types.IEntity.Hashtags[]).map(tag => ({
    id: get(tag, 'id', 0),
    title: get(tag, 'title', '')
  }))
});

// List mapper
export const CaseList = (src: Types.IQuery.CaseList): Types.IEntity.Case[] => src.map(item => Case(item));
