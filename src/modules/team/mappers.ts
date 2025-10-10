import { get } from 'radash';
import * as Types from './types';

// Bitta xodim mapper (uz + ru parallel)
export const SingleEmploye = (src: any): Types.IEntity.SingleEmploye => ({
  uz: {
    id: get(src, 'uz.id', 0),
    photo: get(src, 'uz.photo', ''),
    username: get(src, 'uz.username', ''),
    job_title: get(src, 'uz.job_title', ''),
    photo_type: get(src, 'uz.photo_type', ''),
    background_image: get(src, 'uz.background_image', '')
  },
  ru: {
    id: get(src, 'ru.id', 0),
    photo: get(src, 'ru.photo', ''),
    username: get(src, 'ru.username', ''),
    job_title: get(src, 'ru.job_title', ''),
    photo_type: get(src, 'ru.photo_type', ''),
    background_image: get(src, 'ru.background_image', '')
  }
});

// Xodimlar ro‘yxati uchun mapper
export const Team = (src: any[]): Types.IEntity.SingleEmploye[] => (src ?? []).map(item => SingleEmploye(item));
