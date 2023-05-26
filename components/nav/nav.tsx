import styles from "./nav.module.scss";

function Nav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav_ul}>
        <li>ana səhifə</li>
        <li>məqalələr</li>
        <li>karta</li>
        <li>podkast</li>
      </ul>
    </div>
  );
}

export default Nav;
