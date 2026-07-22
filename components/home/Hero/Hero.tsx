"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import styles from "./Hero.module.scss";
import SocialsIcons from "@/components/global/SocialsIcons/SocialsIcons";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// jump to a #hash section once the layout is final (used when arriving from another page)
function handleHashScroll() {
  const hash = window.location.hash.slice(1);
  const el = hash ? document.getElementById(hash) : null;

  if (!el) {
    document.documentElement.classList.remove("preScroll");
    return;
  }

  history.replaceState(null, "", window.location.pathname);

  // wait for the pin to fully settle, scroll once, then reveal
  setTimeout(() => {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y });
    document.documentElement.classList.remove("preScroll");
  }, 400);
}

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current!;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // --- split text ---
      const split = new SplitText(headingRef.current!, {
        type: "chars, words",
      });
      const subtitleElements = document.querySelectorAll(`.${styles.subtitle}`);
      const paragraphSplit = new SplitText(subtitleElements, { type: "lines" });

      gsap.set([headingRef.current, ...subtitleElements], {
        visibility: "visible",
      });
      gsap.set(split.chars, { yPercent: 100, opacity: 0 });
      gsap.set(paragraphSplit.lines, { yPercent: 100, opacity: 0 });

      gsap.to(split.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      });
      gsap.to(paragraphSplit.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      // --- video scrub on scroll ---
      video.pause();
      video.currentTime = 0;
      const endValue = isMobile ? "120% top" : "bottom top";

      let built = false;
      const buildVideoScroll = () => {
        if (built) return; // guard against double init
        built = true;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: video,
              start: "top top",
              end: endValue,
              scrub: true,
              pin: true,
              invalidateOnRefresh: true,
            },
          })
          .to(video, {
            currentTime: video.duration || 0,
            ease: "none",
            onUpdate: () => video.pause(),
          });

        // the pin changes page height — positions are only correct after a refresh
        ScrollTrigger.refresh();

        // now that layout is final, honor any #hash we arrived with
        handleHashScroll();
      };

      // readyState check handles the cached-video case; the listener handles first load
      if (video.readyState >= 1) {
        buildVideoScroll();
      } else {
        video.addEventListener("loadedmetadata", buildVideoScroll, {
          once: true,
        });
      }
    },
    { scope: containerRef }, // useGSAP auto-reverts everything created here on unmount
  );

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* video */}
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

      {/* filter */}
      <div className={styles.noiseFilter}></div>

      {/* content */}
      <div className={styles.heroContent}>
        {/* heading */}
        <h1 ref={headingRef} className={styles.heroHeading}>
          Veni, Vidi, Vici
        </h1>

        {/* main text */}
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
            <button>
              <Link href="/menu">our menu</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
