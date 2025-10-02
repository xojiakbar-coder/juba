import { get } from 'radash';
import * as Types from './types';

export const Service = (src: Types.IEntity.Services): Types.IEntity.Services => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  description: get(src, 'short_description', '')
});

export const Services = (src: Types.IQuery.ServicesList): Types.IEntity.Services[] => src.map(item => Service(item));
