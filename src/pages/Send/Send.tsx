import { Form } from './components/Form';
import { Send as SendForm } from '@/modules/contact/forms';

import { Button } from '@/interface/components/Button';
import { message } from '@/interface/components/Message';

import styles from './Send.module.scss';
import { Element } from 'react-scroll';

const Send = () => {
  return (
    <Element name="send">
      <div className={styles.container}>
        <h1 className={styles.title}>
          Raqamingizni qoldiring
          <br />
          Biz sizga qo'ng'iroq qilamiz
          <br />
          va loyihangizni muhokama qilamiz
        </h1>

        <div className={styles.wrapper}>
          <SendForm onSuccess={() => message.success('Yoborildi')} className={styles.form}>
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
                  Отправить
                </Button>
              </>
            )}
          </SendForm>
        </div>
      </div>
    </Element>
  );
};

export default Send;
