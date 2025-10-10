import { Item } from './components';
import { Title } from '@/interface/components/Title';

// hooks
import { useTeam } from '@/modules/team/hooks';

// styles
import styles from './Team.module.scss';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useCurrentLang } from '@/core/utils';

const Team = () => {
  const { data } = useTeam();
  const lang = useCurrentLang();
  const { t } = useTranslation();

  return (
    <Element name="team" className={styles.team}>
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
    </Element>
  );
};

export default Team;
