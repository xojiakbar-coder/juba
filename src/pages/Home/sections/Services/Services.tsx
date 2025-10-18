import { Title } from '@/interface/components/Title';
import { Data } from '@/interface/components/Cards/Data';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useServices } from '@/modules/services/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Services.module.scss';
import { our_services_items } from '@/layouts/Aspects/Navigation/items';

const Services = () => {
  const { lang } = useContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { services } = useServices();

  const handleClick = (index: number) => {
    const path = our_services_items[index];
    if (!path) return; // xavfsizlik uchun
    navigate(`/our-services/${path}/`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Title variant="title">{t('services_title')}</Title>
        <div className={styles.grid}>
          {services.map((item, index) => (
            <Data
              key={item[lang].id}
              title={item[lang].title}
              text={item[lang].description}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
