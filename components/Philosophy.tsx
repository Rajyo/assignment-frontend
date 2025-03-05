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
      className="w-[calc(100vw-9px)] bg-white text-black rounded-t-[5vw] pl-[9vw] py-28 relative -mt-32 mb-40"
    >
      <div className="flex flex-col text-[12rem]">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp sentence="Our" inView={inView} speed={0.5} />
        </h1>
        <h1 className="flex flex-wrap -mt-28 italic tracking-tight font-extralight">
          <AnimateWordSlideUp sentence="philosophy" inView={inView} speed={2} />
        </h1>
      </div>

      <div className="w-[80%] h-[60%] flex justify-center items-center">
        <motion.div
          variants={scale}
          initial="initial"
          animate={inView ? "animate" : "exit"}
          className="w-1/2 h-full mr-20"
        >
          <video
            src="/videos/philosophy.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
        </motion.div>

        <div className="w-1/2 flex flex-col gap-10 text-3xl leading-snug tracking-tight max-w-[90%]">
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
