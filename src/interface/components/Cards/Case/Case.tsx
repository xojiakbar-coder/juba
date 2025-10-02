import { Badge } from '@mantine/core';
import styles from './Case.module.scss';

interface IBadge {
  id: number;
  title: string;
}

interface IProps {
  photo?: string;
  title?: string;
  hashtags?: IBadge[];
}

const Case = ({ photo = '', title = '', hashtags = [] }: IProps) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.imageWrapper}>
          <img src={photo} alt="image not found" className={styles.image} />
        </div>
        <div className={styles.badges}>
          {hashtags.length > 0 &&
            hashtags.map(({ id, title }) => (
              <Badge
                key={id}
                radius="sm"
                color="gray"
                variant="outline"
                classNames={{ root: styles.badge, label: styles.badgeLabel }}
              >
                {title}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Case;
