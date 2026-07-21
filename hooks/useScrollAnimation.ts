import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseScrollAnimationOptions = {
  from: gsap.TweenVars;          // animation start state (e.g. { opacity: 0, y: 80 })
  trigger?: string;               // scroll trigger start (default: "top 30%")
  stagger?: number;               // delay between children (default: 0)
  animateChildren?: boolean;      // animate children instead of the element itself
};

const useScrollAnimation = <T extends HTMLElement>({
  from,
  trigger = "top 30%",
  stagger = 0,
  animateChildren = false,
}: UseScrollAnimationOptions) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    // pick what to animate — the element or its children
    const target = animateChildren ? ref.current.children : ref.current;

    const animation = gsap.from(target, {
      ...from,
      stagger,
      scrollTrigger: {
        trigger: ref.current,
        start: trigger,
      },
    });

    // cleanup
    return () => {
      animation.kill();
    };
  }, []);

  return ref;
};

export default useScrollAnimation;