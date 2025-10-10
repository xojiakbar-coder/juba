import { useParams } from 'react-router-dom';
import { useServiceTypeTop } from '@/modules/services/hooks';

import { Card } from '../components';

// styles
import styles from './TopCard.module.scss';
import { useCurrentLang } from '@/core/utils';

const TopCard = () => {
  const { id } = useParams();
  const { data } = useServiceTypeTop(id ? +id : 0);
  const lang = useCurrentLang();

  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <Card key={id} i={i + 1} title={item?.[lang]?.title} description={item?.[lang]?.description} />
      ))}
    </div>
  );
};

export default TopCard;
