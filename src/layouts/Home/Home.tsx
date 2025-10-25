import { useEffect } from 'react';
import { scrollTo } from '@/helpers';
import { networkStatus } from '@/core/utils';
import { useLocation } from 'react-router-dom';
import { useDisclosure, useViewportSize } from '@mantine/hooks';

import { AppShell } from '@mantine/core';
import { Main } from '@/layouts/Aspects/Main';
import { Header } from '@/layouts/Aspects/Header';
import { Navbar } from '@/layouts/Aspects/Navbar';
import { Footer } from '@/layouts/Aspects/Footer';

const Home = () => {
  const { state } = useLocation();
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = useViewportSize();

  useEffect(() => {
    networkStatus();
  }, []);

  useEffect(() => {
    if (width > 1024) close();
  }, [width]);

  useEffect(() => {
    if (state?.scrollTo) {
      const timeout = setTimeout(() => scrollTo(state), 100);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <AppShell navbar={{ width: 300, breakpoint: 'lg', collapsed: { desktop: true, mobile: !opened } }}>
      <Header opened={opened} open={open} />
      <Navbar opened={opened} close={close} />
      <Main />
      <Footer />
    </AppShell>
  );
};

export default Home;
