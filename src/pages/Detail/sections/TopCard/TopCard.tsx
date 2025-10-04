import { useParams } from 'react-router-dom';
import { useServiceTypeTop } from '@/modules/services/hooks';

import { Card } from '../components';

// styles
import styles from './TopCard.module.scss';

const TopCard = () => {
  const { id } = useParams();
  const { data } = useServiceTypeTop(id ? +id : 0);

  return (
    <div className={styles.container}>
      {data.map(({ id, title, description }, i) => (
        <Card key={id} i={i + 1} title={title} description={description} />
      ))}
    </div>
  );
};

export default TopCard;
