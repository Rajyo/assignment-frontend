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
      className="w-[calc(100vw-9px)] bg-[#161616] text-white rounded-t-[5vw] pl-[9vw] py-28 relative -mt-32"
    >
      <div className="flex flex-col text-[11rem]">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp
            sentence="Development"
            inView={inView}
            speed={0.025}
          />
        </h1>
        <h1 className="flex flex-wrap -mt-24 tracking-tighter">
          <AnimateWordSlideUp
            sentence="and design"
            inView={inView}
            speed={0.05}
          />
        </h1>
        <h1 className="flex flex-wrap -mt-28 italic tracking-tight font-extralight">
          <AnimateWordSlideUp sentence="resources" inView={inView} speed={1} />
        </h1>
      </div>

      <motion.div
        ref={scrollRef}
        drag="x"
        dragConstraints={{ left: -2500, right: 0 }}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ width: "max-content" }}
        className="grid grid-flow-col gap-16 whitespace-nowrap py-20 overflow-x-scroll pr-20 w-full scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {resourcesData.map((item) => (
          <motion.div variants={opacity} initial="initial" animate={inView ? "animate" : "exit"} key={item.id} className="flex flex-col gap-5 w-[40rem] group">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="w-fit h-fit rounded-3xl object-cover group-hover:scale-[0.98] transition-all duration-300 ease-in-out"
            />
            <p className="text-2xl whitespace-break-spaces">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex w-full pl-[45vw] py-20">
        <div className="flex flex-col gap-10">
          <div className="text-3xl w-[60%]">
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
            className="text-3xl px-8 py-3 uppercase group-hover:text-black"
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
