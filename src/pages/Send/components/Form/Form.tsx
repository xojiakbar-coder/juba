import * as Fields from '@/interface/containers/Fields';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();

  return (
    <>
      <Fields.Text name="name" placeholder={t('name')} required className="mb-6" />
      <Fields.Text required type="tel" name="phone" className="mb-6" placeholder={t('phone_number')} />
    </>
  );
};

export default Form;
