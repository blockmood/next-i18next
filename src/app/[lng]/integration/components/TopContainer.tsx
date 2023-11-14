import styles from './TopContainer.module.scss';
type PropsType = {
  background: string;
  img: string;
  title: string;
  describe: string;
  text?: string;
};
const TopContainer = ({ background, img, title, describe, text }: PropsType) => {
  return (
    <div style={{ background: background }} className={styles.topContainer}>
      <div className={styles.container}>
        <img src={img} className={styles.img} alt="Picture of the author" />
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.describe}>{describe}</p>
          <p className={styles.describe}>{text}</p>
          <a className={styles.more} href="https://accounts.dsers.com/accounts/register">
            TRY IT FREE
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
