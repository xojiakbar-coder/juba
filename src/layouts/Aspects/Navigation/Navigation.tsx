import { nav_items } from './items';
import { Link } from 'react-scroll';
import { Menu } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';

// styles
import cx from 'clsx';
import styles from './Navigation.module.scss';
import { IconChevronDown } from '@tabler/icons-react';

type IProps = {
  onDrawer?: boolean;
  responsible?: boolean;
};

const Navigation = ({ responsible = true, onDrawer = false }: IProps) => {
  const navigate = useNavigate();

  return (
    <nav className={cx(styles.nav, responsible && styles.responsible, onDrawer && styles.drawer)}>
      {nav_items.map(item => {
        // AGAR CHILDREN BO'LSA (masalan Xizmatlarimiz)
        if (item.children && item.children.length > 0) {
          return (
            <Menu key={item.id} shadow="md" width={200} withArrow arrowPosition="side" trigger="click">
              <Menu.Target>
                <div className={cx(styles.link, styles.menu_target, onDrawer && styles.drawer_link)}>
                  <p>{item.title}</p>
                  <IconChevronDown stroke={1.5} />
                </div>
              </Menu.Target>

              <Menu.Dropdown classNames={{ dropdown: styles.dropdown }}>
                {item.children.map(child => (
                  <Menu.Item
                    key={child.id}
                    onClick={() => navigate(child.path || '/')}
                    className={styles.dropdown_item}
                  >
                    {child.title}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          );
        }

        if (item.to) {
          return (
            <Link
              key={item.id}
              to={item.to}
              offset={-80}
              smooth={true}
              duration={500}
              className={cx(styles.link, onDrawer && styles.drawer_link)}
              activeClass={styles.active}
              spy={true}
            >
              {item.title}
            </Link>
          );
        }

        return (
          <NavLink
            key={item.id}
            to={item.path || '/'}
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
