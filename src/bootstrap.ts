import 'dayjs/locale/uz-latn';
import 'dayjs/locale/ru';

import dayjs from 'dayjs';

import config from '@/config';

import { i18n, storage } from '@/core/services';

i18n.init({
  languages: ['ru', 'uz'],
  currentLanguage: config.language.initial,
  initialLanguage: 'uz',
  onChange: (language: string) => {
    storage.local.set('language', language);
    dayjs.locale(language === 'uz' ? 'uz-latn' : language);
  },
  debug: import.meta.env.DEV
});
