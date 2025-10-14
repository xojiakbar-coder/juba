import * as Types from '@/modules/services/types';

import { Title } from '@/interface/components/Title';
import { Data } from '@/interface/components/Cards/Data';

import { toSlug } from '@/helpers';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useServices } from '@/modules/services/hooks';
import { useContext } from '@/core/context/contentLanguage';
import { useContext as useServiceContext } from '@/core/context/servicesContext';

// styles
import styles from './Services.module.scss';

const Services = () => {
  const { lang } = useContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { services } = useServices();
  const { setService } = useServiceContext();

  const getDetailData = (item: Types.IEntity.SingleSerivce) => {
    navigate(`/xizmatlar/${toSlug(item.title)}`);
    setService(item);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Title variant="title">{t('services_title')}</Title>
        <div className={styles.grid}>
          {services.map(item => (
            <Data
              key={item[lang].id}
              title={item[lang].title}
              text={item[lang].description}
              onClick={() => getDetailData(item['uz'])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
