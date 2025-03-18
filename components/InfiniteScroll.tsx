"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function InfiniteScroll({ children }: { children: ReactNode }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const baseVelocity = 200;

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateContentWidth = () => {
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth / 2); // Half of the repeated width
      }
    };

    updateContentWidth();
    window.addEventListener("resize", updateContentWidth);
    return () => window.removeEventListener("resize", updateContentWidth);
  }, []);

  const x = useTransform(baseX, (v) => `${wrap(-contentWidth, 0, v)}px`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1; // Reverse direction when scrolling up
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1; // Move forward when scrolling down
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden sm:py-28 py-16">
      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-[5vw] whitespace-nowrap"
          style={{ x }}
        >
          <div className="flex items-center gap-[5vw]">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default InfiniteScroll;