import styles from './Banner.module.scss';

type PropsType = {
  title: string;
  img: string;
  background: string;
};

const Banner = ({ title, img, background }: PropsType) => {
  return (
    <div style={{ background: background }} className={styles.bannerBox}>
      <div className={styles.imgBox}>
        <img src={img} alt="" />
        <div className={styles.text}>
          <h2>{title}</h2>
          <a href="">TRY IT FREE</a>
        </div>
      </div>
      <div className={styles.banner}></div>
    </div>
  );
};

export default Banner;
