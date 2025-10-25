// react
import { memo } from 'react';

import { Desc } from '@/interface/components/Desc';
import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';

import { useTranslation } from 'react-i18next';
import { useServiceDetailById } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Home.module.scss';
import { ScrollLink } from '@/interface/components/ScrollLink';

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
          <ScrollLink buttonProps={{ size: 'xl' }} className={styles.btn} to="send">
            {t('consultation')}
          </ScrollLink>
        </div>
      ))}
    </Wrapper>
  );
});

export default Home;
