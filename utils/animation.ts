import { AnimationProps } from "./types";

export const getStaggerAnimation = (index: number): AnimationProps => ({
    initial: {
        opacity: 0,
        y: 30,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
    viewport: {
        once: true,
    },
    transition: {
        duration: 0.4,
        delay: index * 0.2,
    },
});

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  