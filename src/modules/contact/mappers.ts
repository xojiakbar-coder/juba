import { get } from 'radash';
import * as Types from './types';

export const Contect = (src: any[]): Types.IEntity.Contact[] => {
  return (src ?? []).map(item => ({
    id: get(item, 'id', 0),
    phoneNumber: get(item, 'phone_number', ''),
    longitude: get(item, 'longitude', ''),
    latitude: get(item, 'latitude', ''),
    email: get(item, 'email', ''),
    telegram: get(item, 'telegram', ''),
    facebook: get(item, 'feacebook', ''),
    instagram: get(item, 'instagram', '')
  }));
};

export const UserContact = (src: any): Types.IEntity.UserContact => ({
  name: get(src, 'name', ''),
  phone: get(src, 'phone_number', '')
});
