import { AxiosPromise } from 'axios';
import { http } from '@/core/services';

import * as Types from './types';

export const About = (): AxiosPromise<Types.IApi.Response> => http.public.get('/solo-main/');
