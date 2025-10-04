import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

// hooks
import { useParams } from 'react-router-dom';
import { useServiceKeys } from '@/modules/services/hooks';

// styles
import styles from './Case.module.scss';

const Cases = () => {
  const { id } = useParams();
  const { data } = useServiceKeys(id ? +id : 0);

  return (
    <div className={styles.case}>
      <Title variant="title" className={styles.title}>
        Наши кейсы
      </Title>

      <div className={styles.grid}>
        {data?.map(({ id, title, photo, hashtags }) => (
          <Case key={id} title={title} photo={photo} hashtags={hashtags} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
