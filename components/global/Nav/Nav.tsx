"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Nav.module.scss";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (hash: string) => {
    setIsOpen(false); // close menu on click

    if (pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${hash}`;
    }
  };

  // close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
      {/* hamburger button */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* nav links */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navListItem}>
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        </li>
        <li className={styles.navListItem}>
          <a href="/#about" onClick={(e) => { e.preventDefault(); handleClick("about"); }}>About Us</a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#reserve" onClick={(e) => { e.preventDefault(); handleClick("reserve"); }}>Reserve Table</a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#contact" onClick={(e) => { e.preventDefault(); handleClick("contact"); }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;