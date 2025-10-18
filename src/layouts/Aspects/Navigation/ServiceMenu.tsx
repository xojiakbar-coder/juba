// react
import React, { memo } from 'react';
import { Menu } from '@mantine/core';

import { Icon } from '@/interface/components/Icon';

// styles
import cx from 'clsx';
import styles from './Navigation.module.scss';

interface IServiceMenuProps {
  t: (key: string) => string;
  serviceItems: React.ReactNode[];
  onDrawer?: boolean;
}

const ServiceMenu: React.FC<IServiceMenuProps> = ({ t, serviceItems, onDrawer = false }) => {
  return (
    <Menu shadow="md" width={220} withArrow arrowPosition="side" trigger="click-hover">
      <Menu.Target>
        <button type="button" className={cx(styles.link, styles.menu_target, onDrawer && styles.drawer_link)}>
          <p>{t('services')}</p>
          <Icon name="ChevronDown" />
        </button>
      </Menu.Target>
      <Menu.Dropdown classNames={{ dropdown: styles.dropdown }}>{serviceItems}</Menu.Dropdown>
    </Menu>
  );
};

export default memo(ServiceMenu);
