import styles from "./nav.module.scss";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li>
            <Link href="/home">ana səhifə</Link>
          </li>
          <li>
            <Link href="/articles">məqalələr</Link>
          </li>
          <li>
            <Link href="/karta">karta</Link>
          </li>
          <li>
            <Link href="/podcast">podkast</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.menu}>
        <Image src="/assets/menu.svg" alt="menu" width={32} height={32} />
      </div>
    </>
  );
}

export default Nav;
