import { Image, Spoiler } from '@mantine/core';
import { Title } from '@/interface/components/Title';

// hooks
import { useAbout } from '@/modules/about/hooks';

// styles
import styles from './About.module.scss';
import { Resault } from '../Resault';
import { Element } from 'react-scroll';

const About = () => {
  const { data } = useAbout();

  return (
    <Element className={styles.container} name="about">
      <Title variant="section-name" className={styles.title}>
        JUBA - маркетинговое агентство в Ташкенте
      </Title>

      <div className={styles.wrapper}>
        <div>
          <Image src={data[0]?.photo} alt="About image not found" />
        </div>
        <Spoiler maxHeight={370} showLabel="Batafsil" hideLabel="Berkitish" className={styles.description}>
          {data[0]?.description}
        </Spoiler>
      </div>

      <Resault />
    </Element>
  );
};

export default About;
