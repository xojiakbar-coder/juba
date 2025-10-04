import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Image } from '@mantine/core';
import { Title } from '@/interface/components/Title';

// hooks
import { useParams } from 'react-router-dom';
import { useServiceSubDetail, useServiceWorks } from '@/modules/services/hooks';

// styles
import styles from './OurWorks.module.scss';
import { Desc } from '../components';

const OurWorks = () => {
  const { id } = useParams();
  const { data: subData } = useServiceSubDetail(id ? +id : 0);
  const { data } = useServiceWorks(id ? +id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        Bizning ishlarimiz
      </Title>
      <Desc className={styles.desc}>
        Мы с гордостью представляем наши работы, которые отражают нашу экспертность, творческий подход и
        результативность.
      </Desc>

      <div className={styles.wrapper}>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            padding: '5rem',
            focus: 'center',
            gap: '2rem',
            autoplay: true,
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2, focus: 'center' },
              640: { perPage: 1, focus: 'center' }
            }
          }}
          aria-label="Bizning ishlarimiz"
        >
          {data?.map((item, index) => (
            <SplideSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={item.photo} alt={item.services} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default OurWorks;
