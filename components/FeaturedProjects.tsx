import React, { useRef } from "react";
import { AnimateWordSlideUp } from "./ui/animation";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { scale } from "@/lib/framer";
import { projectData } from "@/lib/data";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

const FeaturedProjects = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section
      ref={container}
      className="w-[calc(100vw-9px)] min-h-screen bg-[#161616] text-white rounded-t-[5vw] pl-[9vw] pt-28 pb-60"
    >
      <div className="flex flex-col text-[12rem]">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp sentence="Featured" inView={inView} speed={0.5} />
        </h1>
        <div className="flex gap-x-10">
          <motion.div
            variants={scale}
            custom={1}
            initial="initial"
            animate={inView ? "animate" : "exit"}
          >
            <video
              className="w-[13.6vw] h-[10vw] -mt-6 rounded-full bg-red-200"
              src="/videos/projects.mp4"
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <h1 className="flex flex-wrap -mt-28 italic tracking-tight font-extralight">
            <AnimateWordSlideUp
              sentence="projects"
              inView={inView}
              speed={1.5}
            />
          </h1>
        </div>
      </div>

      <div className="w-[68vw] py-20 grid grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <AnimatePresence>
            {projectData.slice(0, 6).map((item) => (
              <FeaturedProjectsCard key={item.id} {...item} />
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence>
          {projectData.slice(6, 11).map((item) => (
            <FeaturedProjectsCard key={item.id} {...item} />
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
