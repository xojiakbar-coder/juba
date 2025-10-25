import config from '@/config';

import { Anchor } from '@mantine/core';
import { formatNumber } from '@/helpers';
import { useContact } from '@/modules/contact/hooks';

// styles
import cx from 'clsx';
import styles from './PhoneAnchor.module.scss';

const PhoneAnchor = ({ className }: { className?: string }) => {
  const { data } = useContact();

  return (
    <Anchor className={cx(styles.contact_btn, className)} href={`tel:${data?.[0]?.['uz']?.phoneNumber}`}>
      {formatNumber(data?.[0]?.['uz']?.phoneNumber) || config.support.phone}
    </Anchor>
  );
};

export default PhoneAnchor;
