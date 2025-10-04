// styles
import cx from 'clsx';
import styles from './Card.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  i?: number;
  title?: string;
  services?: string;
  className?: string;
  description?: string;
}

const Card = ({ i, title, services, className, description, ...args }: IProps) => {
  return (
    <div {...args} className={cx(styles.card, className)}>
      <div className={styles.index}>{i}</div>
      <div>
        <div className={styles.title}>{title}</div>
        <div>
          <div className={styles.wrapper}>
            <p className={styles.services}>{services}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
