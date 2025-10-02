import { get } from 'radash';
import * as Types from './types';

export const About = (src: any[]): Types.IEntity.About[] => {
  return (src ?? []).map(item => ({
    id: get(item, 'id', 0),
    photo: get(item, 'photo', ''),
    description: get(item, 'description', '')
  }));
};
