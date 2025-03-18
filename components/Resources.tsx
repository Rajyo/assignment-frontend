import React, { RefObject, useRef } from "react";
import { AnimateLineSlideUp, AnimateWordSlideUp } from "./ui/animation";
import { useInView, motion } from "framer-motion";
import { resourcesData } from "@/lib/data";
import Image from "next/image";
import FlippingButton from "./ui/flipping-button";
import StickyCursor from "./StickyCursor";
import { opacity } from "@/lib/framer";

const Resources = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "500px 100px -50px -50px",
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={container}
      className="sm:w-[calc(100vw-9px)] w-full bg-[#161616] text-white sm:rounded-t-[5vw] rounded-t-[10vw] pl-[9vw] sm:py-28 py-16 relative -mt-32"
    >
      <div className="flex flex-col xl:text-[11rem] lg:text-[10rem] md:text-[7rem] sm:text-[6rem] min-[500px]:text-[4.5rem] min-[400px]:text-[3.5rem] min-[350px]:text-[3rem] text-[2.75rem]">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp
            sentence="Development"
            inView={inView}
            speed={0.025}
          />
        </h1>
        <h1 className="flex flex-wrap lg:-mt-24 md:-mt-12 sm:-mt-10 min-[500px]:-mt-8 -mt-4 tracking-tighter">
          <AnimateWordSlideUp
            sentence="and design"
            inView={inView}
            speed={0.05}
          />
        </h1>
        <h1 className="flex flex-wrap lg:-mt-28 md:-mt-16 sm:-mt-12 min-[500px]:-mt-10 min-[350px]:-mt-6 -mt-5 italic tracking-tight font-extralight">
          <AnimateWordSlideUp sentence="resources" inView={inView} speed={1} />
        </h1>
      </div>

      <motion.div
        ref={scrollRef}
        drag="x"
        dragConstraints={container}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ width: "max-content" }}
        className="grid grid-flow-col gap-x-[4vw] whitespace-nowrap py-20 lg:px-28 md:px-20 sm:px-14 px-12 overflow-x-scroll w-full scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {resourcesData.map((item) => (
          <motion.div variants={opacity} initial="initial" animate={inView ? "animate" : "exit"} key={item.id} className="flex flex-col gap-5 lg:w-[35vw] md:w-[40vw] sm:w-[50vw] w-[80vw] group">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="w-fit h-fit rounded-3xl object-cover group-hover:scale-[0.98] transition-all duration-300 ease-in-out"
            />
            <p className="lg:text-2xl md:text-xl sm:text-base text-xl whitespace-break-spaces">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex w-full sm:pl-[45vw] sm:py-20 pb-20">
        <div className="flex flex-col gap-10">
          <div className="2xl:text-[1.5vw] xl:text-[1.75vw] lg:text-[2vw] md:text-[2.25vw] sm:text-[2.5vw] text-[4vw] leading-tight lg:w-[30vw] sm:w-[35vw] w-[85vw]">
            <AnimateLineSlideUp
              sentence="We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files."
              inView={inView}
              speed={0.2}
            />
          </div>

          <FlippingButton
            fromColor="black"
            toColor="white"
            title="View all resources"
            inView={inView}
            className="lg:text-3xl md:text-xl sm:text-lg min-[450px]:text-2xl text-base px-8 py-3 uppercase group-hover:text-black"
          />
        </div>
      </div>

      <StickyCursor
        stickyElement={scrollRef as RefObject<HTMLDivElement>}
        title="Drag"
      />
    </section>
  );
};

export default Resources;
