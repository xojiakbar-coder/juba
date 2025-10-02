import { Logo } from '@/layouts/Aspects/Logo';

// styles
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
