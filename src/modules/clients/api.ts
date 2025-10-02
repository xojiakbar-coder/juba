import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const Clients = (): HttpPromise<Types.IApi.Response> => http.public.get('/client-photo/');
