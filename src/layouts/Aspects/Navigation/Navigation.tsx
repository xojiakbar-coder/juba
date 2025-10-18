import { items, type Types } from './data';

import { ServiceMenu } from './components';
import { ScrollLink } from '@/interface/components/ScrollLink';

// hooks
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// styles
import cx from 'clsx';
import styles from './Navigation.module.scss';

const Navigation = memo(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation('home');

  const renderNavItem = useCallback(
    (item: Types.INavItem) => {
      if (item.children) return <ServiceMenu key={item.id} />;

      if (pathname !== '/' && !item.general) {
        return (
          <button
            key={item.id}
            className={cx(styles.link)}
            onClick={() => navigate('/', { state: { scrollTo: item.to } })}
          >
            {t(item.title)}
          </button>
        );
      }

      return (
        <ScrollLink key={item.id} to={item.to!} className={cx(styles.link)}>
          {t(item.title)}
        </ScrollLink>
      );
    },
    [t, pathname]
  );

  return <nav className={cx(styles.nav)}>{items.map(renderNavItem)}</nav>;
});

export default Navigation;
