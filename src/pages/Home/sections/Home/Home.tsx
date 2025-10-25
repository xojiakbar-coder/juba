import { Content } from './components';
import { useSlider } from '@/modules/home/hooks';
import { Wrapper } from '@/interface/components/Section';
import { useContext } from '@/core/context/contentLanguage';

import styles from './Home.module.scss';

const Home = () => {
  const { lang } = useContext();
  const { slider } = useSlider();

  const photo = slider[lang]?.photo;

  return (
    <Wrapper className={styles.container} id="home">
      <div className={styles.hero}>
        <img
          src={photo ? photo : '/default.jpg'}
          loading="eager"
          fetchPriority="high"
          alt="Juba Marketing banner"
          className={styles.heroImage}
        />

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
    </Wrapper>
  );
};

export default Home;
