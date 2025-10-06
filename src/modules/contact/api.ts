import { http } from '@/core/services';
import { AxiosPromise } from 'axios';

import * as Types from './types';

export const Contact = (): AxiosPromise<Types.IApi.Response> => http.public.get('/our-contact/');

export const UserContact = ({
  values
}: {
  values: Types.IEntity.UserContact;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.public.post('/contact-user/', {
    name: values.name,
    phone_number: values.phone
  });
