import { get } from 'radash';
import * as Types from './types';

export const Slider = (src: Types.IEntity.Slider[]): Types.IEntity.Slider[] => {
  return (src ?? []).map(item => ({
    id: get(item, 'id', 0),
    title: get(item, 'title', ''),
    photo: get(item, 'photo', ''),
    description: get(item, 'short_description', '')
  }));
};
