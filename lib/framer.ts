import { easeIn, easeOut } from "framer-motion";

export const slideUp = {
  initial: {
    y: "50px",
    opacity: 0,
  },
  animate: () => ({
    y: "0px",
    opacity: 1,
    transition: { duration: 0.5, delay: 0, easeIn },
  }),
  exit: () => ({
    opacity: 0,
    transition: { duration: 0.25, easeOut },
  }),
};

export const slideUpInterval = {
  initial: {
    y: "100px",
    opacity: 0,
  },
  animate: (i: number) => ({
    y: "0px",
    opacity: 1,
    transition: { duration: 0.5, delay: i, easeIn },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.5, delay: 0.1 * i, easeOut },
  }),
};

export const slideRightInterval = {
  initial: {
    x: "20px",
    opacity: 0,
  },
  animate: (i: number) => ({
    x: "0px",
    opacity: 1,
    transition: { duration: 0.25, delay: i, easeIn },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.25, delay: 0.1 * i, easeOut },
  }),
};

export const slideUpWordsInterval = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i: number) => ({
    opacity: 1,
    y: "0",
    transition: {
      duration: 2,
      delay: i * 0.06,
      ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export const slideUpLineInterval = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i: number) => ({
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.25,
      delay: i * 0.04,
      ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export const scale = {
  initial: {
    scale: 0,
  },
  animate: (i: number) => ({
    scale: 1,
    transition: {
      duration: 1,
      delay: i * 0.06,
      ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    scale: 0,
  },
};

export const slideLeft = {
  initial: {
    x: "50px",
    opacity: 0,
  },
  animate: (i: number) => ({
    x: "0px",
    opacity: 1,
    transition: { duration: 1, delay: 0.5 * i, easeIn },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: "50px",
    transition: { duration: 0.25, delay: 0 * i, easeOut },
  }),
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.15, easeIn },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.5, delay: i * 0.15, easeOut },
  }),
};

export const rotateX = {
  initial: {
    rotateX: 90,
    opacity: 0,
  },
  animate: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + i * 0.25,
    },
  }),
  exit: {
    rotateX: 90,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const hover = {
  initial: {
    scale: 0,
  },
  animate: (i: number) => ({
    scale: 1,
    transition: {
      duration: 2,
      delay: i * 0.06,
      ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    scale: 0,
  },
};

export const clipPath = {
  initial: { clipPath: "inset(50% 0 50% 0)" },
  animate: {
    clipPath: "inset(0% 0 0% 0)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    clipPath: "inset(50% 0 50% 0)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const slideSidebarTextOpacity = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: { duration: 0.25, delay: 0.2, easeIn },
  }),
  exit: () => ({
    opacity: 0,
    transition: { duration: 0.1, delay: 0, easeOut },
  }),
};

export const slideSidebarOpacity = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: { duration: 0.75, delay: 0, easeIn },
  }),
  exit: () => ({
    opacity: 0,
    transition: { duration: 0.4, delay: 0, easeOut },
  }),
};

export const slideSidebarLeft = {
  initial: {
    x: "50%",
  },
  animate: () => ({
    x: "0%",
    transition: { duration: 0.5, delay: 0, easeIn },
  }),
  exit: () => ({
    x: "100%",
    transition: { duration: 0.4, delay: 0, easeOut },
  }),
};
