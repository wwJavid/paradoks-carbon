import styles from "./header.module.scss";
import Brand from "../brand/brand";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Brand />
      </header>
    </>
  );
}
