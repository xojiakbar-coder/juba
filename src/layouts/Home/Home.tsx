import { useDisclosure } from '@mantine/hooks';

import config from '@/config';
import { Outlet } from 'react-router-dom';

import { Lang } from '../Aspects/Lang';
import { Footer } from '../Aspects/Footer';
import { Logo } from '@/layouts/Aspects/Logo';
import { Button } from '@/interface/components/Button';
import { Navigation } from '@/layouts/Aspects/Navigation';
import { AppShell, Burger, Group, Drawer } from '@mantine/core';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const [opened, { open, close, toggle }] = useDisclosure();

  return (
    <>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header classNames={{ header: styles.header }}>
          <Logo />
          <Navigation responsible />
          <Group gap={14}>
            <div className={styles.lang}>
              <Lang />
            </div>
            <Button size="lg" variant="primary-out" className={styles.contact_btn}>
              {config.support.phone}
            </Button>
          </Group>
          <Burger opened={opened} onClick={toggle} className={styles.burger} size="sm" />
        </AppShell.Header>

        <AppShell.Main classNames={{ main: styles.main }}>
          <Outlet />
        </AppShell.Main>

        <AppShell.Footer classNames={{ footer: styles.footer }}>
          <Footer />
        </AppShell.Footer>
      </AppShell>

      <Drawer
        size="100%"
        onClose={close}
        opened={opened}
        withCloseButton={false}
        classNames={{ content: styles.drawer }}
      >
        <div className={styles.drawer_inner}>
          <Group justify="space-between" align="center" className={styles.top_group}>
            <Lang />
            <Burger opened={opened} onClick={toggle} className={styles.burger} size="sm" />
          </Group>

          <div className={styles.navigation}>
            <Navigation onDrawer onClose={close} />
          </div>

          <div className={styles.bottom}>
            <Button size="lg" variant="primary-out" className={styles.contact_btn_drawer}>
              {config.support.phone}
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Home;
