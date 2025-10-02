import i18next, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

// uz files
import uzCommon from '@/translations/uz/common.json';
import uzHome from '@/translations/uz/home.json';

// ru files
import ruCommon from '@/translations/ru/common.json';
import ruHome from '@/translations/ru/home.json';

export const i18nConfig: InitOptions = {
  resources: {
    uz: {
      common: uzCommon,
      home: uzHome
    },
    ru: {
      common: ruCommon,
      home: ruHome
    }
  },
  lng: 'uz',
  fallbackLng: 'uz',
  ns: ['common', 'home'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  }
};

i18next.use(initReactI18next);

export default i18next;
