import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

// styles
import styles from './Main.module.scss';

const Main = () => {
  return (
    <AppShell.Main classNames={{ main: styles.main }}>
      <Outlet />
    </AppShell.Main>
  );
};

export default Main;
