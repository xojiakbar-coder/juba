import { Box } from '@mantine/core';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Title } from '@/interface/components/Title';

// hooks
import { useTranslation } from 'react-i18next';
import { useClients } from '@/modules/clients/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Clients.module.scss';

function BoxComponent({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <Box {...props} p="md" w="300px" c="white" style={{ borderRadius: '8px' }} className={styles.item}>
      {children}
    </Box>
  );
}

const Clients = () => {
  const { data } = useClients();
  const { lang } = useContext();
  const { t } = useTranslation();

  return (
    <div className={styles.clients} id="clients">
      <Title variant="section-name" className={styles.title}>
        {t('our_clients')}
      </Title>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Marquee
            gap="sm"
            fadeEdges
            repeat={6}
            pauseOnHover
            duration={30.2}
            fadeEdgesSize="sm"
            className={styles.marquee_container}
            fadeEdgesColor="var(--color-primary)"
          >
            {data.map(i => (
              <BoxComponent key={i[lang]?.id}>
                <img src={i[lang]?.photo} alt="clients logos not found" loading="lazy" />
              </BoxComponent>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
