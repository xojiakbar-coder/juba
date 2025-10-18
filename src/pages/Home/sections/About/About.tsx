import { Resault } from '../Resault';
import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';

// hooks
import { useTranslation } from 'react-i18next';
import { useAbout } from '@/modules/about/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './About.module.scss';

const About = () => {
  const { data } = useAbout();
  const { lang } = useContext();
  const { t } = useTranslation();

  return (
    <Wrapper id="about" lightBg>
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
    </Wrapper>
  );
};

export default About;
