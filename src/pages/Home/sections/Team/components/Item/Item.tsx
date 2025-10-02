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
        <img src={photo} alt={`${username} not found`} className={styles.photoInactive} />
        <img src={background_image} alt={`${username} not found`} className={styles.photoActive} />
      </div>

      <div className={styles.info}>
        <h3>{username}</h3>
        <p>{job_title}</p>
      </div>
    </div>
  );
};

export default Item;
