import styles from './Abstract.module.scss';
type PropsType = {
  title: string;
  describe: string;
};
const Abstract = ({ title, describe }: PropsType) => {
  return (
    <div className={styles.abstract}>
      <h1>{title}</h1>
      <p>{describe}</p>
    </div>
  );
};

export default Abstract;
