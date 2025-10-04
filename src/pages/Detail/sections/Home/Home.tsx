import { scroller } from 'react-scroll';
import { useParams } from 'react-router-dom';
import { useServiceDetailById } from '@/modules/services/hooks';

// styles
import styles from './Home.module.scss';

import { Desc } from '../components';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

// schema: Detail-, Solo- , Works, Top Price/Id, Bottom

const Home = () => {
  const { id } = useParams();
  const { data } = useServiceDetailById(id ? +id : 0);

  return (
    <div className={styles.container}>
      {data.map(({ id, detail_title, detail_description }) => (
        <div key={id}>
          <Title variant="secondary" className={styles.title}>
            {detail_title}
          </Title>
          <Desc>{detail_description}</Desc>
          <Button size="xl" className={styles.btn} onClick={() => scroller.scrollTo('send', {})}>
            Loyiha muhokama qilish
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Home;
