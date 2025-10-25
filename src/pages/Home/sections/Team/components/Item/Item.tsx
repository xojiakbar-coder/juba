import styles from './Item.module.scss';

interface IProps {
  id: number;
  photo: string;
  username: string;
  job_title: string;
  background_image: string;
}

const Item = ({ username, job_title, photo, background_image }: IProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.photoWrapper}>
        <img src={photo} alt={`${username} not found`} className={styles.photoInactive} loading="lazy" />
        <img src={background_image} alt={`${username} not found`} className={styles.photoActive} loading="lazy" />
      </div>

      <div className={styles.info}>
        <p>{username}</p>
        <p>{job_title}</p>
      </div>
    </div>
  );
};

export default Item;
