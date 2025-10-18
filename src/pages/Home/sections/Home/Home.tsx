import { Content } from './components';

import { useSlider } from '@/modules/home/hooks';
import { useContext } from '@/core/context/contentLanguage';

import styles from './Home.module.scss';

const Home = () => {
  const { lang } = useContext();
  const { slider } = useSlider();

  const image = slider[lang]?.photo;

  return (
    <div className={styles.container} id="home">
      <div className={styles.hero}>
        <img src={image} alt="" fetchPriority="high" className={styles.heroImage} loading="eager" />

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
