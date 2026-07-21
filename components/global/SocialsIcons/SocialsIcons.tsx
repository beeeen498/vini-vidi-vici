"use client";

import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import styles from "./SocialsIcons.module.scss";

interface SocialsIconsProps {
  size: number;
}

const SocialsIcons = ({ size }: SocialsIconsProps) => {
  return (
    <>
      <FaInstagram className={styles.icon} size={size} aria-label="Instagram" />
      <FaTiktok className={styles.icon} size={size} aria-label="TikTok" />
      <FaFacebookF className={styles.icon} size={size} aria-label="Facebook" />
    </>
  );
};

export default SocialsIcons;
