import styles from "./nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

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

      <div className={styles.menu} onClick={handleClick}>
        <Image src="/assets/menu.svg" alt="menu" width={32} height={32} />
      </div>

      {open && (
        <div className={styles.menu_items}>
          <ul>
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
        </div>
      )}
    </>
  );
}

export default Nav;
