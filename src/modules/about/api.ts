import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const About = (): HttpPromise<Types.IApi.Response> => http.public.get('/solo-main/');
