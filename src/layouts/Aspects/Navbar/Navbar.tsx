import { memo, useEffect } from 'react';
import { useViewportSize } from '@mantine/hooks';

import { Lang } from '@/layouts/Aspects/Lang';
import { Menu, PhoneAnchor } from './components';
import { AppShell, Center, Group } from '@mantine/core';
import { DrawerNavigation } from '../Navigation/components';

// styles
import cx from 'clsx';
import styles from './Navbar.module.scss';

const Navbar = ({ opened, close }: { opened: boolean; close: () => void }) => {
  const { width } = useViewportSize();

  useEffect(() => {
    if (opened && width < 1024) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [opened, width]);

  return (
    <AppShell.Navbar
      className={cx(styles.navbar, opened && styles.show_navbar)}
      role="navigation"
      aria-label="Main menu"
    >
      <Group className={styles.group}>
        <Lang />
        <Menu type="Close" opened={opened} toggle={close} />
      </Group>
      <DrawerNavigation onClose={close} />
      <Center mt="auto" mb="30px">
        <PhoneAnchor />
      </Center>
    </AppShell.Navbar>
  );
};

export default memo(Navbar);
