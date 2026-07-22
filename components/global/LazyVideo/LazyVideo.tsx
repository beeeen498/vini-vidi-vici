"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  src: string;
  className?: string;
};

const LazyVideo = ({ src, className }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading a bit before it's visible
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={inView ? src : undefined}  // only set src when near view
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
};

export default LazyVideo;