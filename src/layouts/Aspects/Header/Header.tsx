import { memo } from 'react';

import { Logo } from '@/layouts/Aspects/Logo';
import { Lang } from '@/layouts/Aspects/Lang';
import { AppShell, Group } from '@mantine/core';
import { Menu, PhoneAnchor } from '../Navbar/components';
import { Navigation } from '@/layouts/Aspects/Navigation';

// styles
import styles from './Header.module.scss';

const Header = ({ open }: { opened: boolean; open: () => void }) => {
  return (
    <AppShell.Header classNames={{ header: styles.header }}>
      <Logo />
      <Navigation />
      <Group className={styles.group}>
        <Lang />
        <PhoneAnchor />
      </Group>
      <Menu type="Burger" toggle={open} />
    </AppShell.Header>
  );
};

export default memo(Header);
