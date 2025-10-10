import { nav_items } from './items';
import { Link } from 'react-scroll';
import { Menu } from '@mantine/core';
import { animateScroll as scroll } from 'react-scroll';
import { IconChevronDown } from '@tabler/icons-react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useServices } from '@/modules/services/hooks';

// styles
import cx from 'clsx';
import styles from './Navigation.module.scss';
import { useCurrentLang } from '@/core/utils';

type IProps = {
  onDrawer?: boolean;
  responsible?: boolean;
  onClose?: () => void;
};

const Navigation = ({ responsible = true, onDrawer = false, onClose }: IProps) => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { pathname } = useLocation();
  const { services } = useServices();
  const currentLang = useCurrentLang();
  const { t } = useTranslation('home');

  return (
    <nav className={cx(styles.nav, responsible && styles.responsible, onDrawer && styles.drawer)}>
      {nav_items.map(item => {
        // AGAR CHILDREN BO'LSA (masalan Xizmatlarimiz)
        if (item.children) {
          return (
            <Menu key={item.id} shadow="md" width={200} withArrow arrowPosition="side" trigger="click">
              <Menu.Target>
                <div className={cx(styles.link, styles.menu_target, onDrawer && styles.drawer_link)}>
                  <p>{t(item?.title)}</p>
                  <IconChevronDown stroke={1.5} />
                </div>
              </Menu.Target>

              <Menu.Dropdown classNames={{ dropdown: styles.dropdown }}>
                {services.map((child, i) => (
                  <Menu.Item
                    key={child[currentLang]?.id}
                    onClick={() => {
                      onClose?.();
                      navigate(`${lang}/service/${child[currentLang]?.id}`);
                      scroll.scrollToTop({ duration: 100, smooth: false });
                    }}
                    className={styles.dropdown_item}
                  >
                    {services[i][currentLang]?.title}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          );
        }

        if (item.to) {
          return (
            <Link
              spy={true}
              key={item.id}
              to={item.to}
              offset={-80}
              smooth={true}
              duration={500}
              activeClass={styles.active}
              className={cx(styles.link, onDrawer && styles.drawer_link)}
              onClick={() => {
                if (pathname !== '/') {
                  onClose?.();
                  navigate('/', { state: { scrollTo: item.to } });
                } else {
                  onClose?.();
                }
              }}
            >
              {t(item?.title)}
            </Link>
          );
        }

        return (
          <NavLink
            key={item.id}
            to={item.path || '/'}
            onClick={() => onClose?.()}
            className={({ isActive }) => cx(styles.link, isActive && styles.active, onDrawer && styles.drawer_link)}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
