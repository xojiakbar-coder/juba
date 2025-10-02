import { Title } from '@/interface/components/Title';

// hooks
import { useClients } from '@/modules/clients/hooks';

// styles
import styles from './Clients.module.scss';

const Clients = () => {
  const { data } = useClients();

  return (
    <div className={styles.clients}>
      <Title variant="section-name" className={styles.title}>
        Bizning mijozlar
      </Title>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.scroller}>
            <div className={styles.marquee}>
              {data.map(i => (
                <div key={i.id} className={styles.item}>
                  <img src={i.photo} alt="clients logos not found" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
