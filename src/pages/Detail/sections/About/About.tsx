import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';

// hooks
import { useParams } from 'react-router-dom';
import { useServiceSolo } from '@/modules/services/hooks';

// styles
import styles from './About.module.scss';
import { useCurrentLang } from '@/core/utils';

const About = () => {
  const { id } = useParams();
  const lang = useCurrentLang();
  const { data } = useServiceSolo(id ? +id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {data[0]?.[lang]?.title}
      </Title>

      <div className={styles.wrapper}>
        <div>
          <Image src={data[0]?.[lang]?.photo} alt="About image not found" />
        </div>
        <Spoiler maxHeight={370} showLabel="Batafsil" hideLabel="Berkitish" className={styles.description}>
          {data[0]?.[lang]?.description}
        </Spoiler>
      </div>
    </div>
  );
};

export default About;
