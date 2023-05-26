import styles from "./header.module.scss";
import Brand from "../brand/brand";
import Utilities from "../utilities/utilities";

export default function Header() {
  return (
    <header className={styles.header}>
      <Brand />
      <Utilities />
    </header>
  );
}
