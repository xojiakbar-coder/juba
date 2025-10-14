import { Content } from './components';

import { useSlider } from '@/modules/home/hooks';
import { useContext } from '@/core/context/contentLanguage';

import styles from './Home.module.scss';

const Home = () => {
  const { lang } = useContext();
  const { slider } = useSlider();

  return (
    <div className={styles.container} id="home">
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${slider[lang].photo})`
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
    </div>
  );
};

export default Home;
