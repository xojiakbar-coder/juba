import { get } from 'radash';
import * as Types from './types';

// Bitta Client mapper (uz + ru parallel)
export const Client = (src: any): Types.IEntity.Client => ({
  uz: {
    id: get(src, 'uz.id', 0),
    photo: get(src, 'uz.photo', ''),
    photo_type: get(src, 'uz.photo_type', '')
  },
  ru: {
    id: get(src, 'ru.id', 0),
    photo: get(src, 'ru.photo', ''),
    photo_type: get(src, 'ru.photo_type', '')
  }
});

export const Clients = (src: any[]): Types.IEntity.Client[] => (src ?? []).map(item => Client(item));
