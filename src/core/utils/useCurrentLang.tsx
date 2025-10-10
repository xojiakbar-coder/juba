import { useTranslation } from 'react-i18next';

const useCurrentLang = (): 'uz' | 'ru' => {
  const { i18n } = useTranslation();
  return i18n.language === 'ru' ? 'ru' : 'uz';
};

export default useCurrentLang;
