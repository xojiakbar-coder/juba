import { TopCard } from '../TopCard';
import { Desc } from '../components';
import { Title } from '@/interface/components/Title';

import { useContext } from '@/core/context/servicesContext';
import { useServiceSubDetail } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './SubDetail.module.scss';

const SubDetail = () => {
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceSubDetail(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name">{data?.[lang]?.detail_sub_title}</Title>
      <Desc className={styles.desc}>{data?.[lang]?.detail_sub_description}</Desc>
      <TopCard />
    </div>
  );
};

export default SubDetail;
