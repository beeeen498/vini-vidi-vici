"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import styles from "./About.module.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const gridRef = useScrollAnimation<HTMLDivElement>({
    from: { opacity: 0, y: 80 },
    trigger: "top 30%",
    stagger: 0.15,
    animateChildren: true,
  });

  return (
    <section id="about" className={styles.about}>
      {/* TEXT */}
      <div className={styles.aboutMainContent}>
        <div className={styles.text}>
          <h2>Italian Cuisine, Done the Right Way</h2>
          <p>
            We bring classic Italian flavors, stripped of the bullshit and
            elevated with precision, passion, and fire.
          </p>
          <h3>Good food. Great wine. No excuses.</h3>
        </div>

        <div className={styles.btn}>
          {/* button */}
          <button
            onClick={() =>
              document
                .getElementById("reserve")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            reserve table
          </button>
        </div>
      </div>

      {/* GALLERY */}
      <div ref={gridRef} className={styles.galleryGrid}>
        <div className={styles.gridItem1}>
          {/* gridItem1 */}
          <Image
            src="/images/AboutUs/image-1.jpg"
            alt="food"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className={styles.gridItem2}>
          {/* gridItem2 */}
          <Image
            src="/images/AboutUs/image-2.jpg"
            alt="food"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className={styles.gridItem3}>
          {/* gridItem3 */}
          <Image
            src="/images/AboutUs/image-3-v2.jpg"
            alt="food"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className={styles.gridItem4}>
          {/* gridItem4 */}
          <Image
            src="/images/AboutUs/image-4.jpg"
            alt="food"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className={styles.gridItem5}>
          {/* gridItem5 */}
          <Image
            src="/images/AboutUs/image-5.jpg"
            alt="food"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className={styles.gridItem6}>
          {/* gridItem6 */}
          <Image
            src="/images/AboutUs/image-6.jpg"
            alt="food"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
