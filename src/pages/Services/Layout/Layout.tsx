import { Outlet } from 'react-router-dom';

// global sections
import Send from '@/pages/Send/Send';
import Contact from '@/pages/Contact/Contact';

// styles
import styles from './Layout.module.scss';
import { Suspense } from 'react';
import { Splash } from '@/interface/components/Splash';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Splash />}>
        <Outlet />
      </Suspense>
      <Contact />
      <Send />
    </div>
  );
};

export default Layout;
