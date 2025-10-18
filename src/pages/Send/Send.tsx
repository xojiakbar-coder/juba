import { Form } from './components/Form';
import { useTranslation } from 'react-i18next';
import { Send as SendForm } from '@/modules/contact/forms';

import { Button } from '@/interface/components/Button';
import { message } from '@/interface/components/Message';

import styles from './Send.module.scss';

const Send = () => {
  const { t } = useTranslation();

  return (
    <section id="send" className={styles.container}>
      <h1 className={styles.title}>
        {t('form_title')},
        <br />
        {t('form_subtitle')}
      </h1>

      <main className={styles.wrapper}>
        <SendForm onSuccess={() => message.success('Yuborildi')} className={styles.form}>
          {({ isLoading }) => (
            <>
              <Form />
              <Button
                full
                size="lg"
                effective
                htmlType="submit"
                disabled={isLoading}
                classNames={{ root: styles.button }}
              >
                {isLoading ? t('sending') : t('send')}
              </Button>
            </>
          )}
        </SendForm>
      </main>
    </section>
  );
};

export default Send;
