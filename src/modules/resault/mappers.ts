import { get } from 'radash';
import * as Types from './types';

export const Result = (src: Types.IEntity.Result): Types.IEntity.Result => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  result: get(src, 'result', 0)
});

export const ResultList = (src: Types.IQuery.ResultList): Types.IEntity.Result[] => src.map(item => Result(item));
