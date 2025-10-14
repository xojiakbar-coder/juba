import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';

// hooks
import { useServiceSolo } from '@/modules/services/hooks';
import { useContext } from '@/core/context/servicesContext';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './About.module.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceSolo(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {data[0]?.[lang]?.title}
      </Title>

      <div className={styles.wrapper}>
        <div>
          <Image src={data[0]?.[lang]?.photo} alt="About image not found" />
        </div>
        <Spoiler maxHeight={370} showLabel={t('more')} hideLabel={t('hide')} className={styles.description}>
          {data[0]?.[lang]?.description}
        </Spoiler>
      </div>
    </div>
  );
};

export default About;
