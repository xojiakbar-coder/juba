import { get } from 'radash';
import * as Types from './types';

export const Client = (src: Types.IEntity.Client): Types.IEntity.Client => ({
  id: get(src, 'id', 0),
  photo: get(src, 'photo', ''),
  photo_type: get(src, 'photo_type', '')
});

export const Clients = (src: Types.IQuery.ClientsList): Types.IEntity.Client[] => src.map(item => Client(item));
