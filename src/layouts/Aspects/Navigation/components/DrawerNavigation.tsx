import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { items, Types } from '../data';
import ServiceMenu from './ServiceMenu';
import { ScrollLink } from '@/interface/components/ScrollLink';

// styles
import cx from 'clsx';
import styles from '../Navigation.module.scss';

const DrawerNavigation = ({ onClose }: { onClose?: () => void }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation('home');

  const renderNavItem = useCallback(
    (item: Types.INavItem) => {
      if (item.children) return <ServiceMenu key={item.id} type="navbar" onClose={onClose} />;

      if (pathname !== '/' && !item.general) {
        return (
          <button
            key={item.id}
            className={cx(styles.link, styles.navbar_link)}
            onClick={() => {
              navigate('/', { state: { scrollTo: item.to } });
              onClose?.();
            }}
          >
            {t(item.title)}
          </button>
        );
      }

      return (
        <ScrollLink key={item.id} to={item.to!} onClose={onClose} className={cx(styles.link, styles.navbar_link)}>
          {t(item.title)}
        </ScrollLink>
      );
    },
    [t, pathname]
  );
  return <nav className={cx(styles.nav, styles.drawer)}>{items.map(renderNavItem)}</nav>;
};

export default DrawerNavigation;
