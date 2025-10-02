import { Content } from './components';
import { Element } from 'react-scroll';
import homeImage from '@/assets/images/home/home.png';

import { useSlider } from '@/modules/home/hooks';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const { sliders } = useSlider();

  return (
    <Element className={styles.container} name="home">
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${sliders?.[0]?.photo ? sliders?.[0]?.photo : homeImage})`
        }}
      >
        <Content title={sliders[0]?.title} description={sliders?.[0]?.description} desktop />
      </div>

      <Content title={sliders[0]?.title} description={sliders?.[0]?.description} desktop={false} />
    </Element>
  );
};

export default Home;
