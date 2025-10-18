// react
import { memo } from 'react';

import { Desc } from '@/interface/components/Desc';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';
import { Wrapper } from '@/interface/components/Section';

import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useServiceDetailById } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Home.module.scss';

const Home = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServiceDetailById(id);

  return (
    <Wrapper id="home">
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
    </Wrapper>
  );
});

export default Home;
