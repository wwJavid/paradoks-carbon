import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        <li>ana səhifə</li>
        <li>məqalələr</li>
        <li>karta</li>
        <li>podkast</li>
      </ul>
    </nav>
  );
}

export default Nav;
