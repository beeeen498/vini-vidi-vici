"use client"
import Link from "next/link";
import SocialsIcons from "../SocialsIcons/SocialsIcons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerMainContent}>
            {/* left */}
            <div className={styles.footerLeft}>
                <h4>Opening Hours:</h4>
                <p>Sun-Thu: <span>12:00 - 23:00</span></p>
                <p>Fri-Sat: <span>12:00 - 00:00</span></p>
            </div>

            {/* middle */}
            <div className={styles.footerMiddle}>
                <img src="/images/logo.png" alt="logo" />
                <h4>Modern Itlian. Timeless taste.</h4>
                <p>27 Via Roma. Tel Aviv</p>
            </div>

            {/* right */}
            <div className={styles.footerRight}>
                <SocialsIcons size={20}/>
            </div>
        </div>

        {/* credits */}
        <div className={styles.footerCredits}>
            <p>Created by <span><Link href={""}>Ben Kedem.</Link></span> <span><Link href="">Credits for Images</Link></span></p>
        </div>
    </footer>
  )
}

export default Footer