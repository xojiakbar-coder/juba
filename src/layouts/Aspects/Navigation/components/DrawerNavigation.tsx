import React from 'react';

// styles
import cx from 'clsx';
import styles from '../Navigation.module.scss';

const DrawerNavigation = ({ onClose }: { onClose?: () => void }) => {
  return <nav className={cx(styles.nav, styles.responsible, styles.drawer)}></nav>;
};

export default DrawerNavigation;
