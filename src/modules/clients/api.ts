import { http } from '@/core/services';
import { AxiosPromise } from 'axios';

import * as Types from './types';

export const Clients = (): AxiosPromise<Types.IApi.Response> => http.public.get('/client-photo/');
