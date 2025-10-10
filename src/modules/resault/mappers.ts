import { get } from 'radash';
import * as Types from './types';

export const Result = (src: Types.IEntity.Result): Types.IEntity.Result => {
  return {
    uz: {
      id: get(src, 'uz.id', 0),
      title: get(src, 'uz.title', ''),
      result: get(src, 'uz.result', 0)
    },
    ru: {
      id: get(src, 'ru.id', 0),
      title: get(src, 'ru.title', ''),
      result: get(src, 'ru.result', 0)
    }
  };
};

export const ResultList = (src: Types.IQuery.ResultList): Types.IEntity.Result[] => src.map(item => Result(item));
