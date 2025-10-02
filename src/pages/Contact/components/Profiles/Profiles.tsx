import styles from './Profiles.module.scss';

interface IProps {
  facebook_url?: string;
  instagram_url?: string;
  email?: string;
  phone_number?: string;
  telegram_url?: string;
  land?: string;
  profilesDir?: 'row' | 'col';
}

const Profiles = ({
  facebook_url,
  instagram_url,
  email,
  phone_number,
  telegram_url,
  land = '',
  profilesDir = 'row'
}: IProps) => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.links} ${profilesDir === 'col' ? styles.col : styles.row}`}>
        <li className={styles.socialLink}>
          <a href={telegram_url} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href={facebook_url} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li className={styles.socialLink}>
          <a href={instagram_url} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
      </ul>

      {land === 'contact' && (
        <div className={styles.contactInfo}>
          <p>{email}</p>
          <p>{phone_number}</p>
          <p>Ислам Каримов 49, 10 этаж</p>
        </div>
      )}
    </div>
  );
};

export default Profiles;
