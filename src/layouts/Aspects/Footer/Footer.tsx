import { Logo } from '@/layouts/Aspects/Logo';

// styles
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className={styles.logo}>
        <Logo event={false} />
      </main>
    </footer>
  );
};

export default Footer;
