"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (hash: string) => {
    if (pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${hash}`; 
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="/menu">Menu</Link>
        </li>
        <li className={styles.navListItem}>
          <a onClick={() => handleClick("about")}>About Us</a>
        </li>
        <li className={styles.navListItem}>
          <a onClick={() => handleClick("reserve")}>Reserve Table</a>
        </li>
        <li className={styles.navListItem}>
          <a onClick={() => handleClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;