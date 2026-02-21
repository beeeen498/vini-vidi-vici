"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import styles from "./Hero.module.scss";
import { useMediaQuery } from "react-responsive";
import SocialsIcons from "@/components/SocialsIcons/SocialsIcons";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useLayoutEffect(() => {
    if (!headingRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      const video = videoRef.current!;

      // Split text
      const split = new SplitText(headingRef.current!, {
        type: "chars, words",
      });

      const subtitleElements = document.querySelectorAll(
        `.${styles.subtitle}`
      );

      const paragraphSplit = new SplitText(subtitleElements, {
        type: "lines",
      });

      // Hide before animation (prevents FOUC)
      gsap.set([headingRef.current, ...subtitleElements], {
        visibility: "visible",
      });

      // Set initial state
      gsap.set(split.chars, {
        yPercent: 100,
        opacity: 0,
      });

      gsap.set(paragraphSplit.lines, {
        yPercent: 100,
        opacity: 0,
      });

      // Animate heading
      gsap.to(split.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      });

      // Animate subtitle
      gsap.to(paragraphSplit.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      // Video scroll animation
      video.pause();
      video.currentTime = 0;

      const startValue = "top top";
      const endValue = isMobile ? "120% top" : "bottom top";

      const initScrollVideo = () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: video,
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        }).to(video, {
          currentTime: video.duration,
          ease: "none",
          onUpdate: () => video.pause(),
        });
      };

      if (video.readyState >= 1) {
        initScrollVideo();
      } else {
        video.addEventListener("loadedmetadata", initScrollVideo);
      }

      return () => {
        split.revert();
        paragraphSplit.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/videos/Hero/wine.mp4"
          muted
          playsInline
          preload="auto"
          className={styles.heroVideo}
        />
      </div>

      <div className={styles.noiseFilter}></div>

      <div className={styles.heroContent}>
        <h1 ref={headingRef} className={styles.heroHeading}>
          Veni, Vidi, Vici
        </h1>

        <div className={styles.heroText}>
          <div className={styles.sloganAndIcons}>
            <h2 className={`${styles.heroSlogan} ${styles.subtitle}`}>
              Lose Yourself to <br /> Italian Flavor
            </h2>

            <div className={styles.socialIcons}>
              <SocialsIcons size={25} />
            </div>
          </div>

          <div className={styles.paragraphAndBtn}>
            <p className={`${styles.heroParagraph} ${styles.subtitle}`}>
              Vini Vidi Vici serves modern Italian cuisine crafted from fresh
              ingredients, bold flavors, and authentic recipes — designed to
              conquer your taste buds.
            </p>

            <button>our menu</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
