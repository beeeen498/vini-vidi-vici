"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Nav.module.scss";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // smooth scroll when already on home; otherwise the plain <a> full-reloads to /#hash
  const goTo = (e: React.MouseEvent, hash: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navListItem}>
          <Link href="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
        </li>
        <li className={styles.navListItem}>
          <a href="/#about" onClick={(e) => goTo(e, "about")}>
            About Us
          </a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#reserve" onClick={(e) => goTo(e, "reserve")}>
            Reserve Table
          </a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#contact" onClick={(e) => goTo(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
