// logo
import jubaLogo from '@/assets/images/logo.jpg';

// hooks
import { useLocation, useNavigate } from 'react-router-dom';

// styles
import styles from './Logo.module.scss';

const Logo = ({ event = true }: { event?: boolean }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== '/' && event) navigate('/');

    if (event) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  };

  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <img src={jubaLogo} alt="Juba Marketing logo not found" loading="lazy" className={styles.logo} />
    </div>
  );
};

export default Logo;
