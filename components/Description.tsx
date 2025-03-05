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
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="w-[80%] h-[60%] flex justify-center items-center">
        <motion.div
          variants={scale}
          initial="initial"
          animate={inView ? "animate" : "exit"}
          className="w-1/2 h-full mr-20"
        >
          <video
            src="/videos/description.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
          />
        </motion.div>

        <div className="w-1/2 flex flex-col gap-10">
          <p className="text-[40.32px] leading-tight tracking-tight mb-10 max-w-[90%]">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>

          <FlippingButton
            inView={inView}
            fromColor="white"
            toColor="black"
            title="What we do"
            className="text-4xl px-[10rem] py-[6rem] group-hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
