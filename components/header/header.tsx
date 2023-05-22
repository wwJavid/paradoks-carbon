import Image from "next/image";
import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header_logo}>
          <Image
            priority
            src="/assets/paradoks.svg"
            alt="Paradoks"
            width={40}
            height={40}
          />

          <Image
            priority
            src="/assets/pd-logo.svg"
            alt="Paradoks Logo"
            width={40}
            height={40}
          />
        </nav>
      </header>
    </>
  );
}

export default Header;
