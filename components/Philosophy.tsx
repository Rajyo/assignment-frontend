import React, { useRef } from "react";
import { AnimateLineSlideUp, AnimateWordSlideUp } from "./ui/animation";
import { useInView, motion } from "framer-motion";
import { scale } from "@/lib/framer";

const Philosophy = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section
      ref={container}
      className="w-[calc(100vw-9px)] bg-white text-black rounded-t-[5vw] pl-[9vw] py-28 relative -mt-32 mb-40 flex flex-col gap-10"
    >
      <div className="flex flex-col lg:text-[12rem] md:text-9xl sm:text-8xl text-7xl">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp sentence="Our" inView={inView} speed={0.5} />
        </h1>
        <h1 className="flex flex-wrap italic tracking-tight font-extralight lg:-mt-4 sm:-mt-2">
          <AnimateWordSlideUp sentence="philosophy" inView={inView} speed={2} className="pr-4 pb-4" />
        </h1>
      </div>

      <div className="sm:w-[80%] min-[500px]:w-[90%] w-[95%] h-[60%] flex justify-center items-center">
        <motion.div
          variants={scale}
          initial="initial"
          animate={inView ? "animate" : "exit"}
          className="w-1/2 h-full mr-20 lg:flex hidden"
        >
          <video
            src="/videos/philosophy.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
        </motion.div>

        <div className="lg:w-1/2 flex flex-col lg:gap-10 sm:gap-7 gap-5 lg:text-[1.75vw] md:text-2xl sm:text-xl min-[500px]:text-lg leading-snug tracking-tight lg:max-w-[90%]">
          <AnimateLineSlideUp
            sentence="In our team, developers work alongside designers, strategists and
            analysts. Cuberto doesn&#39;t do cookie-cutter solutions and we
            build products exactly as they were during the design phase, no
            short cuts or simplifications."
            inView={inView}
            speed={1}
          />
          <AnimateLineSlideUp
            sentence="We&#39;re driven by user‑centered design that drives productivity
            and increases revenue. Our expertise and ingenuity are remarkable,
            yet we always strive to outdo and outperform our previous
            achievements."
            inView={inView}
            speed={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
