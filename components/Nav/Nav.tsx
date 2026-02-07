"use client";

import Link from "next/link";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {/* page */}
        <li className={styles.navListItem}>
          <Link href="/menu">Menu</Link>
        </li>

        {/* sections on homepage */}
        <li className={styles.navListItem}>
          <Link href="/#about">About Us</Link>
        </li>

        <li className={styles.navListItem}>
          <Link href="/#reserve">Reserve Table</Link>
        </li>

        <li className={styles.navListItem}>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
