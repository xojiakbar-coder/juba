import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';

// hooks
import { useAbout } from '@/modules/about/hooks';

// styles
import styles from './About.module.scss';
import { Resault } from '../Resault';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { storage } from '@/core/services';
import { useCurrentLang } from '@/core/utils';

const About = () => {
  const { data } = useAbout();
  const lang = useCurrentLang();
  const { t } = useTranslation();

  return (
    <Element className={styles.container} name="about">
      <Title variant="section-name" className={styles.title}>
        {t('about_us')}
      </Title>

      <div className={styles.wrapper}>
        <div>
          <Image src={data[0]?.[lang]?.photo} alt="About image not found" />
        </div>
        <Spoiler maxHeight={370} showLabel={t('more')} hideLabel={t('hide')} className={styles.description}>
          {data[0]?.[lang]?.description}
        </Spoiler>
      </div>

      <Resault />
    </Element>
  );
};

export default About;
