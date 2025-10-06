import { AxiosPromise } from 'axios';
import { http } from '@/core/services';

import * as Types from './types';

export const Result = (): AxiosPromise<Types.IApi.Response> => http.public.get('/result/');
