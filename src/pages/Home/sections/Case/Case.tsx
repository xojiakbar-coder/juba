import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

import { useTranslation } from 'react-i18next';
import { useCase } from '@/modules/case/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Case.module.scss';

const Cases = () => {
  const { data } = useCase();
  const { lang } = useContext();
  const { t } = useTranslation();

  return (
    <section className={styles.case} id="projects">
      <Title variant="title">{t('our_keys')}</Title>

      <div className={styles.grid}>
        {data?.map(item => {
          const content = item?.[lang];
          if (!content) return null;

          return <Case key={content.id} title={content.title} photo={content.photo} hashtags={content.hashtags} />;
        })}
      </div>
    </section>
  );
};

export default Cases;
