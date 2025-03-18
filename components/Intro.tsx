import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { AnimateWordSlideUp } from "./ui/animation";
import { scale } from "@/lib/framer";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const Intro = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section
      ref={container}
      className="grid lg:text-[7.5vw] sm:text-7xl min-[500px]:text-6xl min-[400px]:text-5xl text-4xl leading-tight w-full pt-24 pb-40 pl-[10vw]"
    >
      <h1 className="flex flex-wrap 2xl:-mt-9 lg:-mt-4 min-[500px]:-mt-3 -mt-1 tracking-tighter">
        <AnimateWordSlideUp
          sentence="We are a digital"
          inView={inView}
          speed={1}
        />
      </h1>
      <div className="flex items-center 2xl:gap-x-5 xl:gap-x-4 lg:gap-x-3 gap-x-2">
        <motion.div
          variants={scale}
          custom={5}
          initial="initial"
          animate={inView ? "animate" : "exit"}
        >
          <video
            className="w-fit lg:h-[7.5vw] sm:h-[8vw] h-[8.5vw] rounded-full bg-red-200"
            src="/videos/intro.mp4"
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
        <div className="flex flex-wrap 2xl:gap-8 xl:gap-7 lg:gap-6 sm:gap-4 gap-2 2xl:-mt-9 lg:-mt-4 min-[500px]:-mt-3 -mt-1 tracking-tighter">
          <h1 className={`${robotoFlex.variable} italic font-extralight`}>
            <AnimateWordSlideUp sentence="design" inView={inView} speed={5} />
          </h1>
          <AnimateWordSlideUp sentence="and" inView={inView} speed={6} />
        </div>
      </div>
      <h1 className="flex flex-wrap 2xl:-mt-9 lg:-mt-4 min-[500px]:-mt-3 -mt-1 tracking-tighter">
        <AnimateWordSlideUp
          sentence="motion agency"
          inView={inView}
          speed={7}
        />
      </h1>
    </section>
  );
};

export default Intro;
