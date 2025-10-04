import { useParams } from 'react-router-dom';
import { useServiceSubDetail } from '@/modules/services/hooks';

import { TopCard } from '../TopCard';

import { Desc } from '../components';
import { Title } from '@/interface/components/Title';

// styles
import styles from './SubDetail.module.scss';

// schema: Detail, Solo, Works, Top Price/Id, Bottom

const SubDetail = () => {
  const { id } = useParams();
  const { data } = useServiceSubDetail(id ? +id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name">{data?.detail_sub_title}</Title>
      <Desc className={styles.desc}>{data?.detail_sub_description}</Desc>
      <TopCard />
    </div>
  );
};

export default SubDetail;
