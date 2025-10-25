import { memo } from 'react';
import { Icon } from '@/interface/components/Icon';

// styles
import styles from './Menu.module.scss';

const Menu = ({ type, toggle, opened }: { type: 'Burger' | 'Close'; toggle?: () => void; opened?: boolean }) => {
  return (
    <button className={styles.menu_wrapper} aria-label={opened ? 'Close navigation menu' : 'Open navigation menu'}>
      <Icon name={type} onClick={toggle} className={styles.menu_icon} />
    </button>
  );
};

export default memo(Menu);
