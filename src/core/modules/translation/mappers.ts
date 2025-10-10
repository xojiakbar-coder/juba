import { get } from 'radash';

import * as Types from './types';

export const Translation = (item: any, propName: string, isObject?: boolean): Types.Translation => {
  if (isObject) {
    return {
      ru: get(item, `${propName}.ru`) || '',
      uz: get(item, `${propName}.uz`) || ''
    };
  }

  return {
    ru: get(item, `${propName}Ru`) || '',
    uz: get(item, `${propName}Uz`) || ''
  };
};

export const SendTranslationToApi = (translation: Types.Translation, propName: string) => {
  return {
    [`${propName}Ru`]: translation.ru,
    [`${propName}Uz`]: translation.uz,
    [`${propName}UzCryl`]: translation.oz
  };
};
