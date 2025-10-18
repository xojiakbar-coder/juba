// react
import { memo } from 'react';

import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';
import { Status } from '@/interface/components/Cards/Status';

// hooks
import { useTranslation } from 'react-i18next';
import { useServiceTypeBottom } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Bottom.module.scss';

const BottomCard = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServiceTypeBottom(id);

  return (
    <Wrapper>
      <Title variant="section-name" className={styles.title}>
        {t('rules_on_work')}
      </Title>
      <main className={styles.grid}>
        {data.map((p, i) => (
          <Status key={p?.[lang]?.id} i={i + 1} title={p?.[lang]?.title} description={p?.[lang]?.description} />
        ))}
      </main>
    </Wrapper>
  );
});

export default BottomCard;
