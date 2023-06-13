import Image from "next/image";
import styles from "./brand.module.scss";

function Brand() {
  return (
    <div className={styles.brand}>
      <div>
        <Image
          priority
          src="/assets/pd-logo.svg"
          alt="Paradoks Logo"
          width={24.58}
          height={49.23}
        />
      </div>

      <div>
        <Image
          priority
          src="/assets/paradoks.svg"
          alt="Paradoks"
          width={153.78}
          height={56}
        />
      </div>
    </div>
  );
}

export default Brand;
