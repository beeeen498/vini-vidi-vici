"use client";

import { useRef, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const LazySection = ({ children, className, id }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop watching once visible
        }
      },
      { rootMargin: "200px" }, // load slightly before it's on screen
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} id={id}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
