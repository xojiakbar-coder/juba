import jubaLogo from '/logo.svg';

import { animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Logo.module.scss';

type IProps = {
  event?: boolean;
};

const Logo = ({ event = true }: IProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== '/' && event) navigate('/');

    if (event) {
      scroll.scrollToTop({
        duration: 200,
        smooth: 'easeInOutQuart'
      });
    }
  };

  return (
    <div onClick={handleClick}>
      <div className={styles.wrapper}>
        <img src={jubaLogo} alt="Juba Marketing logo not found" className={styles.logo} />
      </div>
    </div>
  );
};

export default Logo;
