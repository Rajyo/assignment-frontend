"use client";

import { slideUpWordsInterval } from "@/lib/framer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const AnimateWordSlideUp = ({
  sentence,
  inView,
  speed,
}: {
  sentence: string;
  inView: boolean;
  speed: number;
}) => {
  return (
    <p className="flex flex-wrap lg:gap-x-5 gap-x-2">
      {sentence.split(" ").map((x: string, index: number) => (
        <span key={index} className="flex overflow-hidden relative justify-start pr-2">
          <motion.span
            variants={slideUpWordsInterval}
            custom={index + 1 * speed}
            initial="initial"
            animate={inView ? "animate" : "exit"}
          >
            {x}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export const AnimateLinkonHover = ({
  link,
  index,
  isOpen,
  setIsOpen,
  title,
}: {
  link: string;
  index: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}) => {
  const router = useRouter();
  return (
    <p
      key={index}
      onClick={() => {
        setIsOpen(!isOpen);
        router.push(link);
      }}
      className={`flex flex-col group h-10 justify-center overflow-hidden ${
        isOpen ? "hover:cursor-circle" : ""
      }`}
    >
      <span className="-translate-y-5 group-hover:translate-y-5 transition-all duration-200 ease-in">
        {title}
      </span>
      <span className="-translate-y-5 group-hover:translate-y-5 transition-all duration-200 ease-in">
        {title}
      </span>
    </p>
  );
};

export const AnimateSocialLink = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-6 justify-center gap-2 overflow-hidden">
      <span className="-translate-y-4 group-hover:translate-y-4 transition-all duration-200 ease-in">
        {children}
      </span>
      <span className="-translate-y-4 group-hover:translate-y-4 transition-all duration-200 ease-in">
        {children}
      </span>
    </div>
  );
};
