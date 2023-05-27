import Image from "next/image";
import styles from "./utilities.module.scss";

function Utilities() {
  return (
    <div className={styles.utilities}>
      <button className={styles.utilities_button}>Bizə qoşul</button>
      <Image
        priority
        src="/assets/vector.svg"
        alt="Light mode"
        width={32}
        height={32}
      />
    </div>
  );
}

export default Utilities;
