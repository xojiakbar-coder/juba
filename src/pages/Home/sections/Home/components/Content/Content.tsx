import { scroller } from 'react-scroll';

import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

// styles
import cx from 'clsx';
import styles from './Content.module.scss';
import { useTranslation } from 'react-i18next';

interface IProps {
  title: string;
  desktop?: boolean;
  description: string;
}

const Content = ({ title, description, desktop }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className={cx(styles.container, desktop ? styles.desktop : styles.mobile)}>
      <Title variant="primary" className={styles.title}>
        {title}
      </Title>

      <p className={styles.description}>{description}</p>

      <div className={styles.buttons}>
        <Button size="xl" onClick={() => scroller.scrollTo('send', {})}>
          {t('consultation')}
        </Button>
        <Button variant="secondary" size="xl">
          {t('commercial_offer')}
        </Button>
      </div>
    </div>
  );
};

export default Content;
