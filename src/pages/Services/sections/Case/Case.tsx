// react
import { memo } from 'react';

import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';
import { Wrapper } from '@/interface/components/Section';

// hooks
import { useTranslation } from 'react-i18next';
import { useServiceKeys } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Case.module.scss';

const Cases = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServiceKeys(id);

  return (
    <Wrapper>
      <Title variant="title" className={styles.title}>
        {t('our_keys')}
      </Title>

      <div className={styles.grid}>
        {data?.map(item => (
          <Case
            key={item?.[lang]?.id}
            title={item?.[lang]?.title}
            photo={item?.[lang]?.photo}
            hashtags={item?.[lang]?.hashtags}
          />
        ))}
      </div>
    </Wrapper>
  );
});

export default Cases;
