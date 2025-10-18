// react
import { memo } from 'react';

import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';

// hooks
import { useTranslation } from 'react-i18next';
import { useServiceSolo } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './About.module.scss';

const About = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServiceSolo(id);

  return (
    <Wrapper lightBg>
      <Title variant="section-name" className={styles.title}>
        {data[0]?.[lang]?.title}
      </Title>

      <main className={styles.wrapper}>
        <div>
          <Image src={data[0]?.[lang]?.photo} alt="About image not found" />
        </div>

        <Spoiler maxHeight={370} showLabel={t('more')} hideLabel={t('hide')} className={styles.description}>
          {data[0]?.[lang]?.description}
        </Spoiler>
      </main>
    </Wrapper>
  );
});

export default About;
