import { Card } from '../components';

// hooks
import { useContext } from '@/core/context/servicesContext';
import { useServiceTypeTop } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './TopCard.module.scss';

const TopCard = () => {
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceTypeTop(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <Card key={item?.[lang]?.id} i={i + 1} title={item?.[lang]?.title} description={item?.[lang]?.description} />
      ))}
    </div>
  );
};

export default TopCard;
