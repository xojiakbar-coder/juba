import { get } from 'radash';
import * as Types from './types';

export const SingleEmploye = (src: Types.IEntity.SingleEmploye): Types.IEntity.SingleEmploye => ({
  id: get(src, 'id', 0),
  photo: get(src, 'photo', ''),
  username: get(src, 'username', ''),
  job_title: get(src, 'job_title', ''),
  photo_type: get(src, 'photo_type', ''),
  background_image: get(src, 'background_image', '')
});

export const Team = (src: Types.IQuery.Team): Types.IEntity.SingleEmploye[] => src.map(item => SingleEmploye(item));
