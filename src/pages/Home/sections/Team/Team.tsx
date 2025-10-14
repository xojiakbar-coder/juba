import { Item } from './components';
import { Title } from '@/interface/components/Title';

// hooks
import { useTranslation } from 'react-i18next';
import { useTeam } from '@/modules/team/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Team.module.scss';

const Team = () => {
  const { data } = useTeam();
  const { lang } = useContext();
  const { t } = useTranslation();

  return (
    <div id="team" className={styles.team}>
      <Title variant="section-name" className={styles.title}>
        {t('our_team')}
      </Title>

      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.list}>
            {data?.map(member => (
              <Item
                key={member[lang]?.id}
                id={member[lang]?.id}
                username={member[lang]?.username}
                job_title={member[lang]?.job_title}
                photo={member[lang]?.photo}
                background_image={member[lang]?.background_image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
