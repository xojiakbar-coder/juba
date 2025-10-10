import { get } from 'radash';
import * as Types from './types';

const mapLang = (lang: 'uz' | 'ru', src: any) => ({
  id: get(src, `${lang}.id`, 0),
  photo: get(src, `${lang}.photo`, ''),
  description: get(src, `${lang}.description`, '')
});

export const About = (src: any[]): Types.IEntity.About[] => {
  return (src ?? []).map(item => ({
    uz: mapLang('uz', item),
    ru: mapLang('ru', item)
  }));
};
