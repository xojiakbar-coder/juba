// react
import { memo } from 'react';

import { Desc } from '@/interface/components/Desc';
import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';
import { Status } from '@/interface/components/Cards/Status';

// hooks
import { useContext as useLangContext } from '@/core/context/contentLanguage';
import { useServiceSubDetail, useServiceTypeTop } from '@/modules/services/hooks';

// styles
import styles from './SubDetail.module.scss';

const SubDetail = memo(({ id }: { id: number }) => {
  const { lang } = useLangContext();
  const { data } = useServiceSubDetail(id);
  const { data: serviceCardData } = useServiceTypeTop(id);

  return (
    <Wrapper>
      <Title variant="section-name">{data?.[0]?.[lang]?.detail_sub_title}</Title>
      <Desc className={styles.desc}>{data?.[0]?.[lang]?.detail_sub_description}</Desc>
      <div className={styles.card_wrapper}>
        {serviceCardData.map((item, i) => (
          <Status
            i={i + 1}
            key={item?.[lang]?.id}
            className={styles.card}
            title={item?.[lang]?.title}
            description={item?.[lang]?.description}
          />
        ))}
      </div>
    </Wrapper>
  );
});

export default SubDetail;
