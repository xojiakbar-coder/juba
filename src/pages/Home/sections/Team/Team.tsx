import { Item } from './components';
import { Title } from '@/interface/components/Title';

// hooks
import { useTeam } from '@/modules/team/hooks';

// styles
import styles from './Team.module.scss';
import { Element } from 'react-scroll';

const Team = () => {
  const { data } = useTeam();

  return (
    <Element name="team" className={styles.team}>
      <Title variant="section-name" className={styles.title}>
        Bizning jamoa
      </Title>

      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.list}>
            {data?.map(member => (
              <Item
                key={member.id}
                id={member.id}
                username={member.username}
                job_title={member.job_title}
                photo={member.photo}
                background_image={member.background_image}
              />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Team;
