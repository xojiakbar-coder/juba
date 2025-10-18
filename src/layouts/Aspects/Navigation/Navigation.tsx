// react
import React, { useCallback, useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Link } from 'react-scroll';
import { Menu } from '@mantine/core';
import ServiceMenu from './ServiceMenu';
import { ScrollLink } from '@/interface/components/ScrollLink';

import { useTranslation } from 'react-i18next';
import { useServices } from '@/modules/services/hooks';
import { nav_items, our_services_items, type INavItem } from './items';
import { useContext as useContentLang } from '@/core/context/contentLanguage';

// styles
import cx from 'clsx';
import styles from './Navigation.module.scss';

type IProps = {
  onDrawer?: boolean;
  responsible?: boolean;
  onClose?: () => void;
};

const Navigation = React.memo(({ onDrawer = false, responsible = true, onClose }: IProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation('home');

  const { services } = useServices();
  const { lang: currentLang } = useContentLang();

  const handleScrollOrNavigate = useCallback(
    (target: string) => {
      if (pathname !== '/') navigate('/', { state: { scrollTo: target } });
      onClose?.();
    },
    [pathname, navigate, onClose]
  );

  const handleServiceClick = useCallback(
    (index: number) => {
      onClose?.();
      navigate(`/our-services/${our_services_items[index]}/`);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [navigate, onClose]
  );

  const serviceItems = useMemo(
    () =>
      services.map((service, index) => {
        const langData = service[currentLang];
        if (!langData) return null;

        return (
          <Menu.Item key={langData.id} onClick={() => handleServiceClick(index)} className={styles.dropdown_item}>
            {langData.title}
          </Menu.Item>
        );
      }),
    [services, currentLang, handleServiceClick]
  );

  const renderNavItem = useCallback(
    (item: INavItem) => {
      if (item.children) return <ServiceMenu key={item.id} t={t} serviceItems={serviceItems} onDrawer={onDrawer} />;

      if (item.title === 'contact') {
        if (pathname === '/') {
          return (
            <ScrollLink
              to={item.to!}
              key={item.id}
              onClick={() => onClose?.()}
              className={cx(styles.link, onDrawer && styles.drawer_link)}
            >
              {t(item.title)}
            </ScrollLink>
          );
        }

        return (
          <Link
            key={item.id}
            spy={true}
            to={item.to!}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => {
              onClose?.();
            }}
            className={cx(styles.link, onDrawer && styles.drawer_link)}
          >
            {t(item.title)}
          </Link>
        );
      }

      if (item.to) {
        return (
          <ScrollLink
            to={item.to}
            key={item.id}
            className={cx(styles.link, onDrawer && styles.drawer_link)}
            onClick={() => handleScrollOrNavigate(item.to ? item.to : '')}
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
    [onDrawer, t, handleScrollOrNavigate, serviceItems, onClose, pathname]
  );

  return (
    <nav className={cx(styles.nav, responsible && styles.responsible, onDrawer && styles.drawer)}>
      {nav_items.map(renderNavItem)}
    </nav>
  );
});

export default Navigation;
