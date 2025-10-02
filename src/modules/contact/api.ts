import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const Contect = (): HttpPromise<Types.IApi.Response> => http.public.get('/our-contact/');

export const UserContact = ({
  values
}: {
  values: Types.IEntity.UserContact;
}): HttpPromise<Types.IApi.Single.Response> =>
  http.public.post('/contact-user/', {
    name: values.name,
    phone_number: values.phone
  });
