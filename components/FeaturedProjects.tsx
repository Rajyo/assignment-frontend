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
      className="w-[calc(100vw-9px)] min-h-screen bg-[#161616] text-white rounded-t-[5vw] sm:pl-[9vw] pl-[5vw] pt-28 pb-60"
    >
      <div className="flex flex-col lg:text-[12rem] md:text-9xl sm:text-8xl min-[400px]:text-7xl min-[300px]:text-5xl">
        <h1 className="flex flex-wrap tracking-tighter">
          <AnimateWordSlideUp sentence="Featured" inView={inView} speed={0.5} />
        </h1>
        <div className="flex sm:gap-x-10 gap-x-5 items-center">
          <motion.div
            variants={scale}
            custom={1}
            initial="initial"
            animate={inView ? "animate" : "exit"}
          >
            <video
              className="w-fit lg:h-[10rem] sm:h-[7rem] h-[15vw] rounded-full bg-red-200"
              src="/videos/projects.mp4"
              autoPlay
              loop  
              muted
            ></video>
          </motion.div>
          <h1 className="flex flex-wrap italic tracking-tight font-extralight">
            <AnimateWordSlideUp
              className="pb-5"
              sentence="projects"
              inView={inView}
              speed={1.5}
            />
          </h1>
        </div>
      </div>

      <div className="lg:w-[68vw] sm:pr-[9vw] pr-[5vw] lg:pr-0 py-20 grid sm:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-10 gap-6">
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
