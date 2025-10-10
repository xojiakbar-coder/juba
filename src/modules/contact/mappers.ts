import { get } from 'radash';
import * as Types from './types';

// Bitta Contact mapper (uz/ru parallel)
export const Contact = (src: any): Types.IEntity.Contact => ({
  uz: {
    id: get(src, 'uz.id', 0),
    phoneNumber: get(src, 'uz.phone_number', ''),
    email: get(src, 'uz.email', ''),
    longitude: get(src, 'uz.longitude', ''),
    latitude: get(src, 'uz.latitude', ''),
    telegram: get(src, 'uz.telegram_url', ''), // ✅
    instagram: get(src, 'uz.instagram_url', ''), // ✅
    facebook: get(src, 'uz.facebook_url', '') // ✅
  },
  ru: {
    id: get(src, 'ru.id', 0),
    phoneNumber: get(src, 'ru.phone_number', ''),
    email: get(src, 'ru.email', ''),
    longitude: get(src, 'ru.longitude', ''),
    latitude: get(src, 'ru.latitude', ''),
    telegram: get(src, 'ru.telegram_url', ''), // ✅
    instagram: get(src, 'ru.instagram_url', ''), // ✅
    facebook: get(src, 'ru.facebook_url', '') // ✅
  }
});

export const ContactList = (src: any[]): Types.IEntity.Contact[] => (src ?? []).map(item => Contact(item));

export const UserContact = (src: any): Types.IEntity.UserContact => ({
  name: get(src, 'name', ''),
  phone: get(src, 'phone_number', '')
});
