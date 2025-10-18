import { services as urls } from '../data';

import { Menu } from '@mantine/core';
import { Icon } from '@/interface/components/Icon';

import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useServices } from '@/modules/services/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import cx from 'clsx';
import styles from '../Navigation.module.scss';

const ServiceMenu = () => {
  const { lang } = useContext();
  const navigate = useNavigate();
  const { t } = useTranslation('home');
  const { services } = useServices();

  const serviceItems = useMemo(
    () =>
      services.map((service, index) => {
        if (!service[lang]) return null;

        return (
          <Menu.Item
            key={service[lang].id}
            className={styles.dropdown_item}
            onClick={() => {
              navigate(`/our-services/${urls[index]}/`, { state: { scrollTo: 'home' } });
            }}
          >
            {service[lang].title}
          </Menu.Item>
        );
      }),
    [services, lang]
  );

  return (
    <Menu shadow="md" width={220} withArrow arrowPosition="center" position="bottom-start" trigger="click-hover">
      <Menu.Target>
        <button type="button" className={cx(styles.link, styles.menu_target)}>
          <p>{t('services')}</p>
          <Icon name="ChevronDown" />
        </button>
      </Menu.Target>
      <Menu.Dropdown classNames={{ dropdown: styles.dropdown }}>{serviceItems}</Menu.Dropdown>
    </Menu>
  );
};

export default memo(ServiceMenu);
