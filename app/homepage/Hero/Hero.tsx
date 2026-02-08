"use client";
import { useEffect, useRef } from "react";
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
  const isMobile = useMediaQuery({maxWidth: 767}); 

  useEffect(() => {
    if (!headingRef.current || !videoRef.current) return;
    const video = videoRef.current;

    // Split the .title text into individual characters and words
    const split = new SplitText(headingRef.current, { type: "chars, words" });

    // Split the .subtitle text into individual lines
    const subtitleElements = document.querySelectorAll(`.${styles.subtitle}`);
    const paragraphSplit = new SplitText(subtitleElements, { type: 'lines' });

    // Animate the title characters
    gsap.from(split.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
    });

    // Animate the subtitle lines
    gsap.from(paragraphSplit.lines, {
        opacity: 0,             
        yPercent: 100,          
        duration: 1.8,          
        ease: 'expo.out',       
        stagger: 0.06,        
        delay: 1,   
    })

    video.pause();
    video.currentTime = 0;

    const startValue = isMobile ? "top 0%" : "top 0%";
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
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
    }, [isMobile]);

  return (
    <section id="hero" className={styles.hero}>
        {/* video */}
        <div className={styles.videoWrapper}>
            <video
            ref={videoRef}
            src="/videos/hero/wine.mp4"
            muted
            playsInline
            preload="auto"
            className={styles.heroVideo}
            />
        </div>

        {/* noise filter */}
        <div className={styles.noiseFilter}></div>

        <div className={styles.heroContent}>
            {/* heading */}
            <h1 ref={headingRef} className={styles.heroHeading}>
                Veni, Vidi, Vici
            </h1>

            {/* hero main text */}
            <div className={styles.heroText}>
                {/* slogan */}
                <div className={styles.sloganAndIcons}>
                    <h2 className={`${styles.heroSlogan} ${styles.subtitle}`}>
                        Lose Yourself to <br /> Italian Flavor
                    </h2>

                    {/* socials icons */}
                    <div className={styles.socialIcons}>
                        <SocialsIcons size={25}/>
                    </div>
                </div>

                {/* pargragraph */}
                <div className={styles.paragraphAndBtn}>
                    <p className={`${styles.heroParagraph} ${styles.subtitle}`}>
                        Vini Vidi Vici serves modern Italian cuisine crafted from fresh ingredients, bold flavors, and authentic recipes — designed to conquer your taste buds.
                    </p>

                    <button>
                        our menu
                    </button>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Hero;
