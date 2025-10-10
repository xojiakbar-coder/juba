import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

import cx from 'clsx';
import styles from './Content.module.scss';

interface IProps {
  title: any;
  desktop?: any;
  description: any;
}

const Content = ({ title, description, desktop }: IProps) => {
  const { t } = useTranslation();

  const fileUrl = import.meta.env.VITE_FILE_NAME;

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'KP-Juba-Marketing.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Faylni yuklab olishda xatolik:', error);
    }
  };

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

        <Button variant="secondary" size="xl" onClick={handleDownload}>
          {t('commercial_offer')}
        </Button>
      </div>
    </div>
  );
};

export default Content;
