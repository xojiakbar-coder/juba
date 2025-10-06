import { http } from '@/core/services';
import { AxiosPromise } from 'axios';

import * as Types from './types';

export const Case = (): AxiosPromise<Types.IApi.Response> => http.public.get('/keys/');
