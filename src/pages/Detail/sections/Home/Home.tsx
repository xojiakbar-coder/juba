import { Desc } from '../components';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useContext } from '@/core/context/servicesContext';
import { useServiceDetailById } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceDetailById(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div key={item?.[lang]?.id}>
          <Title variant="secondary" className={styles.title}>
            {item?.[lang]?.detail_title}
          </Title>
          <Desc>{item?.[lang]?.detail_description}</Desc>
          <Button size="xl" className={styles.btn} onClick={() => scroller.scrollTo('send', {})}>
            {t('consultation')}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Home;
