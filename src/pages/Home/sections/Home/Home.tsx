import { useCurrentLang } from '@/core/utils';
import { useSlider } from '@/modules/home/hooks';

import { Element } from 'react-scroll';
import { Content } from './components';

import styles from './Home.module.scss';

const Home = () => {
  const lang = useCurrentLang();
  const { slider } = useSlider();

  return (
    <Element className={styles.container} name="home">
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${slider[lang]?.photo})`
        }}
      >
        <Content
          title={slider[lang]?.title}
          description={slider[lang]?.short_description || slider[lang]?.description}
          desktop
        />
      </div>

      <Content
        title={slider[lang]?.title}
        description={slider[lang]?.short_description || slider[lang]?.description}
        desktop={false}
      />
    </Element>
  );
};

export default Home;
