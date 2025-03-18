import React, { RefObject, useRef } from "react";
import FlippingButton from "./ui/flipping-button";
import { useInView } from "framer-motion";
import StickyCursor from "./StickyCursor";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section ref={container} className="w-screen h-screen relative text-white">
      <video src="/videos/footer.mp4" autoPlay loop muted className="w-full h-full object-cover" />
      <div className="absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
        <h1 className="2xl:text-[12rem] xl:text-[11rem] lg:text-[10rem] md:text-[8rem] sm:text-[6rem] min-[400px]:text-[20vw] text-[25vw] leading-tight tracking-tighter">Have</h1>
        <h1 className="2xl:text-[12rem] xl:text-[11rem] lg:text-[10rem] md:text-[8rem] sm:text-[6rem] min-[400px]:text-[20vw] text-[25vw] leading-tight lg:-mt-24 -mt-16 italic tracking-tighter whitespace-nowrap">
          an idea ?
        </h1>
        <FlippingButton
          fromColor="black"
          toColor="white"
          title="Tell Us"
          inView={inView}
          className="sm:text-[7vw] text-[12vw] px-8 py-3 uppercase group-hover:text-black"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute lg:bottom-10 bottom-28 2xl:left-28 xl:left-24 lg:left-20 md:left-16 sm:left-12 left-8 flex lg:flex-row flex-col gap-6">
          <FlippingButton
            fromColor="black"
            toColor="white"
            title="info@cuberto.com"
            inView={inView}
            className="lg:text-[1.25vw] sm:text-[2.5vw] text-[3vw] px-8 py-3 uppercase group-hover:text-black"
          />

          <FlippingButton
            fromColor="black"
            toColor="white"
            title="+1 301 549 9309"
            inView={inView}
            className="lg:text-[1.25vw] sm:text-[2.5vw] text-[3vw] px-8 py-3 uppercase group-hover:text-black"
          />
        </div>
        <h1
          className="absolute lg:left-[50vw] md:left-16 sm:left-12 left-8 bottom-12 lg:text-[1.75vw] sm:text-[2.5vw] text-[3vw] uppercase"
        >
          Privacy policy
        </h1>
        <p ref={ref}></p>
      </div>
      <StickyCursor
        stickyElement={ref as RefObject<HTMLDivElement>}
        title="Drag"
      />
    </section>
  );
};

export default Footer;
