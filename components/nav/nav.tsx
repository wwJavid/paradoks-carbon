import styles from "./nav.module.scss";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        <li>ana səhifə</li>
        <li>məqalələr</li>
        <li>karta</li>
        <li>podkast</li>
      </ul>
      <button className={styles.menu}>
        <Image
          priority
          src="/assets/menu.svg"
          alt="menu"
          width={32}
          height={32}
        />
      </button>
    </nav>
  );
}

export default Nav;
