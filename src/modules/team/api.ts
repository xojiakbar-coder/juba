import { http } from '@/core/services';
import { AxiosPromise } from 'axios';

import * as Types from './types';

export const Team = (): AxiosPromise<Types.IApi.Response> => http.public.get('/team-photo/');
