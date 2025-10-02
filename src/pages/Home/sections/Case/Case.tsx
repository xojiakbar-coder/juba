import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

// hooks
import { useCase } from '@/modules/case/hooks';

// styles
import styles from './Case.module.scss';
import { Element } from 'react-scroll';

const Cases = () => {
  const { data } = useCase();

  return (
    <Element className={styles.case} name="projects">
      <Title variant="title">Наши кейсы</Title>

      <div className={styles.grid}>
        {data?.map(({ id, title, photo, hashtags }) => (
          <Case key={id} title={title} photo={photo} hashtags={hashtags} />
        ))}
      </div>
    </Element>
  );
};

export default Cases;
