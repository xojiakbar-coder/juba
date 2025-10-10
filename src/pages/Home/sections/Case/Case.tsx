import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

// hooks
import { useCase } from '@/modules/case/hooks';

// styles
import styles from './Case.module.scss';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useCurrentLang } from '@/core/utils';

const Cases = () => {
  const { data } = useCase();
  const lang = useCurrentLang();
  const { t } = useTranslation();

  return (
    <Element className={styles.case} name="projects">
      <Title variant="title">{t('our_keys')}</Title>

      <div className={styles.grid}>
        {data?.map(item => (
          <Case
            key={item[lang]?.id}
            title={item[lang]?.title}
            photo={item[lang]?.photo}
            hashtags={item[lang]?.hashtags}
          />
        ))}
      </div>
    </Element>
  );
};

export default Cases;
