import styles from './Profiles.module.scss';

interface IProps {
  email?: string;
  phone_number?: string;
  telegram_url?: string;
  facebook_url?: string;
  instagram_url?: string;
}

const Profiles = ({ facebook_url, instagram_url, email, phone_number, telegram_url }: IProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
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

      <div className={styles.contactInfo}>
        <p>{email}</p>
        <p>{phone_number}</p>
      </div>
    </div>
  );
};

export default Profiles;
