import { AppShell } from '@mantine/core';
import { Logo } from '@/layouts/Aspects/Logo';

// styles
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <AppShell.Footer classNames={{ footer: styles.footer_wrapper }}>
      <footer className={styles.footer}>
        <Logo event={false} />
      </footer>
    </AppShell.Footer>
  );
};

export default Footer;
