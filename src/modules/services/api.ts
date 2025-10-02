import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const Services = (): HttpPromise<Types.IApi.Response> => http.public.get('/service/');
