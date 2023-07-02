import styles from "./viewcount.module.scss";

interface ViewCountProps {
  value: number;
  label: string;
}

function ViewCount({ value, label }: ViewCountProps) {
  return (
    <div className={styles.view}>
      <h1>{value}</h1>
      <hr className={styles.line} />
      <p>{label}</p>
    </div>
  );
}

export default ViewCount;
