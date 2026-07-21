"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* logo */}
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={30}
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* nav */}
      <Nav />
    </header>
  );
};

export default Header;
