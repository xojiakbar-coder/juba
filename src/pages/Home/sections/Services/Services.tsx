import { useNavigate, useParams } from 'react-router-dom';

import { useServices } from '@/modules/services/hooks';

import { Title } from '@/interface/components/Title';
import { Data } from '@/interface/components/Cards/Data';

// styles
import styles from './Services.module.scss';
import { useTranslation } from 'react-i18next';
import { useCurrentLang } from '@/core/utils';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useParams();
  const { services } = useServices();
  const currentLang = useCurrentLang();

  const getDetailData = (id: number) => {
    navigate(`/${lang}/service/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Title variant="title">{t('services_title')}</Title>
        <div className={styles.grid}>
          {services.map((item, i) => (
            <Data
              key={i + 1}
              title={item[currentLang].title}
              text={item[currentLang].description}
              onClick={() => getDetailData(item[currentLang].id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
