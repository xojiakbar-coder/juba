import { Image } from '@mantine/core';
import { Content } from './components';
import { Wrapper } from '@/interface/components/Section';

// hooks
import { useSlider } from '@/modules/home/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const { lang } = useContext();
  const { slider } = useSlider();

  const image = slider[lang]?.photo || `${import.meta.env.VITE_API_BASE_URL}/media/slider/slider_1024.jpg`;

  return (
    <Wrapper className={styles.container} id="home">
      <div className={styles.hero}>
        {image && (
          <Image
            src={image}
            fetchPriority="high"
            alt="Juba Marketing banner"
            className={styles.heroImage}
            loading="eager"
            fit="cover"
            radius="md"
            width="100%"
            height="100%"
          />
        )}

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
