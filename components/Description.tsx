import React, { useRef } from "react";
import FlippingButton from "./ui/flipping-button";
import { useInView, motion } from "framer-motion";
import { scale } from "@/lib/framer";

const Description = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section
      ref={container}
      className="w-screen lg:h-screen py-20 lg:py-0 flex justify-center items-center"
    >
      <div className="sm:w-[80%] w-[90%] sm:h-[60%] h-full lg:flex justify-center items-center">
        <motion.div
          variants={scale}
          initial="initial"
          animate={inView ? "animate" : "exit"}
          className="w-1/2 h-full xl:mr-20 lg:flex hidden"
        >
          <video
            src="/videos/description.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-10">
          <h1 className="lg:text-[2.5vw] min-[500px]:text-[5vw] text-2xl leading-tight tracking-tight mb-10 lg:max-w-[90%] flex flex-wrap">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </h1>

          <FlippingButton
            inView={inView}
            fromColor="white"
            toColor="black"
            title="What we do"
            className="min-[500px]:text-4xl text-2xl xl:px-[10rem] xl:py-[6rem] lg:px-[8rem] lg:py-[4.5rem] sm:px-[10rem] sm:py-[6rem] min-[500px]:px-[20vw] min-[500px]:py-[15vw] px-[15vw] py-[10vw] group-hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
