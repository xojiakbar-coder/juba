// styles
import styles from './Card.module.scss';

interface IProps {
  title?: string;
  subtitle?: string;
}

const Data = ({ title, subtitle }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>

      {subtitle && (
        <div className={styles.subtitle}>
          <p>{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default Data;
