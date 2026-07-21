"use client";
import Link from "next/link";
import Image from "next/image";
import SocialsIcons from "../SocialsIcons/SocialsIcons";
import siteConfig from "@/config/siteConfig";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMainContent}>
        {/* left */}
        <div className={styles.footerLeft}>
          <h4>Opening Hours:</h4>
          <p>
            Sun-Thu: <span>{siteConfig.hours.sunThu}</span>
          </p>
          <p>
            Fri-Sat: <span>{siteConfig.hours.friSat}</span>
          </p>
        </div>

        {/* middle */}
        <div className={styles.footerMiddle}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={50}
            style={{ objectFit: "contain" }}
          />
          <h4>{siteConfig.slogan}</h4>
          <p>{siteConfig.address}</p>
        </div>

        {/* right */}
        <div className={styles.footerRight}>
          <SocialsIcons size={20} />
        </div>
      </div>

      {/* credits */}
      <div className={styles.footerCredits}>
        <p>
          Created by{" "}
          <span>
            <Link href={""}>Ben Kedem.</Link>
          </span>{" "}
          <span>
            <Link href="/credits">Credits for Images</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
