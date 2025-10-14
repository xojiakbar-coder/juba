import { Menu } from '@mantine/core';
import React, { useCallback, useMemo } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { nav_items } from './items';
import { toSlug } from '@/helpers';
import { useTranslation } from 'react-i18next';
import { useServices } from '@/modules/services/hooks';
import { useContext } from '@/core/context/servicesContext';
import { useContext as useContentLang } from '@/core/context/contentLanguage';

import cx from 'clsx';
import styles from './Navigation.module.scss';
import { ScrollLink } from '@/interface/components/ScrollLink';

type IProps = {
  onDrawer?: boolean;
  responsible?: boolean;
  onClose?: () => void;
};

const Navigation: React.FC<IProps> = React.memo(({ onDrawer = false, responsible = true, onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation('home');

  const { services } = useServices();
  const { setService } = useContext();
  const { lang: currentLang } = useContentLang();

  const handleScrollOrNavigate = useCallback(
    (target: string) => {
      if (pathname !== '/') navigate('/', { state: { scrollTo: target } });
      onClose?.();
    },
    [pathname, navigate, onClose]
  );

  const handleServiceClick = useCallback(
    (item: any) => {
      onClose?.();
      navigate(`/xizmatlar/${toSlug(item.title)}`);
      setService(item);
    },
    [navigate, onClose]
  );

  const serviceItems = useMemo(
    () =>
      services.map(service => {
        const langData = service[currentLang];
        const navigateDat = service['uz'];
        if (!langData) return null;

        return (
          <Menu.Item key={langData.id} onClick={() => handleServiceClick(navigateDat)} className={styles.dropdown_item}>
            {langData.title}
          </Menu.Item>
        );
      }),
    [services, currentLang, handleServiceClick]
  );

  const renderNavItem = useCallback(
    (item: any) => {
      if (item.children) {
        return (
          <Menu key={item.id} shadow="md" width={220} withArrow arrowPosition="side" trigger="click">
            <Menu.Target>
              <div className={cx(styles.link, styles.menu_target, onDrawer && styles.drawer_link)}>
                <p>{t(item.title)}</p>
                <IconChevronDown stroke={1.5} />
              </div>
            </Menu.Target>
            <Menu.Dropdown classNames={{ dropdown: styles.dropdown }}>{serviceItems}</Menu.Dropdown>
          </Menu>
        );
      }

      if (item.to) {
        return (
          <ScrollLink
            key={item.id}
            to={item.to}
            onClick={() => handleScrollOrNavigate(item.to)}
            className={cx(styles.link, onDrawer && styles.drawer_link)}
          >
            {t(item.title)}
          </ScrollLink>
        );
      }

      return (
        <NavLink
          key={item.id}
          to={item.path || '/'}
          onClick={onClose}
          className={({ isActive }) => cx(styles.link, isActive && styles.active, onDrawer && styles.drawer_link)}
        >
          {t(item.title)}
        </NavLink>
      );
    },
    [onDrawer, t, handleScrollOrNavigate, serviceItems, onClose]
  );

  return (
    <nav className={cx(styles.nav, responsible && styles.responsible, onDrawer && styles.drawer)}>
      {nav_items.map(renderNavItem)}
    </nav>
  );
});

export default Navigation;
