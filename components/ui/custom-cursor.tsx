"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";


export const CustomCursor = ({
  children,
  className,
  size
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  size?: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const cursorSize = size || 125;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX - cursorSize / 2);
      y.set(e.clientY - rect.top + scrollY - cursorSize / 2);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
    >
      <AnimatePresence>
        {isInside ? (
          <motion.div
            className={cn("h-[125px] w-[125px] rounded-full absolute z-50 bg-white", className)}
            style={{
              top: y,
              left: x,
              pointerEvents: "none",
            }}
          >
            <Play className="w-10 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black" />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </div>
  );
};
