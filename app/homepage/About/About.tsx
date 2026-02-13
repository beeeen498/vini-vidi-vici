"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      gsap.from(gridRef.current!.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
  );

  return (
    <section ref={sectionRef} id="about" className={styles.about}>
        {/* TEXT */}
        <div className={styles.aboutMainContent}>
            <div className={styles.text}>
                <h2>Italian Cuisine, Done the Right Way</h2>
                <p>
                We bring classic Italian flavors, stripped of the bullshit and elevated
                with precision, passion, and fire.
                </p>
                <h3>Good food. Great wine. No excuses.</h3>
            </div>

            <div className={styles.btn}>
                {/* button */}
                <button>reserve table</button>
            </div>
        </div>



        {/* GALLERY */}
        <div ref={gridRef} className={styles.galleryGrid}>
            <div className={styles.gridItem1}>
                <Image 
                    src="/images/AboutUs/image-1.jpg"
                    alt="food"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className={styles.gridItem2}>
                <Image 
                    src="/images/AboutUs/image-2.jpg"
                    alt="food"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className={styles.gridItem3}>
                <Image 
                    src="/images/AboutUs/image-3-v2.jpg"
                    alt="food"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className={styles.gridItem4}>
                <Image 
                    src="/images/AboutUs/image-4.jpg"
                    alt="food"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className={styles.gridItem5}>
                <Image 
                    src="/images/AboutUs/image-5.jpg"
                    alt="food"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className={styles.gridItem6}>
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
