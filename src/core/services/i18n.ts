import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

interface IProps {
  languages: ('uz' | 'ru')[];
  currentLanguage: 'uz' | 'ru';
  initialLanguage: 'uz' | 'ru';
  onChange: (language: 'uz' | 'ru') => void;
  debug?: boolean;
}

export const init = ({ languages, currentLanguage, initialLanguage, onChange, debug }: IProps) => {
  i18next.on('languageChanged', language => onChange(language as 'uz' | 'ru'));

  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../../translations/${language}/${namespace}.json`)
      )
    )
    .init({
      lowerCaseLng: true,
      lng: currentLanguage,
      fallbackLng: initialLanguage,
      debug,
      supportedLngs: languages,
      interpolation: {
        escapeValue: false
      },
      ns: ['common', 'home'],
      defaultNS: 'common',
      keySeparator: false
    });
};

export const instance = i18next;
