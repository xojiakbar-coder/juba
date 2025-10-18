import { data } from '@/layouts/Aspects/Navigation';

import { Title } from '@/interface/components/Title';
import { Data } from '@/interface/components/Cards/Data';
import { Wrapper } from '@/interface/components/Section';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useServices } from '@/modules/services/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Services.module.scss';

const Services = () => {
  const { lang } = useContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { services } = useServices();

  return (
    <Wrapper>
      <Title variant="title">{t('services_title')}</Title>
      <div className={styles.grid}>
        {services.map((item, index) => (
          <Data
            key={item[lang].id}
            title={item[lang].title}
            text={item[lang].description}
            onClick={() => {
              if (!data.services[index]) return;
              navigate(`/our-services/${data.services[index]}/`);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
