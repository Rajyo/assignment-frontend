import React, { useRef } from "react";
import FlippingButton from "./ui/flipping-button";
import { useInView } from "framer-motion";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section ref={container} className="w-screen relative text-white">
      <video src="/videos/footer.mp4" autoPlay loop muted className="w-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
        <h1 className="text-[12rem] leading-tight tracking-tighter">Have</h1>
        <h1 className="text-[12rem] leading-tight -mt-24 italic tracking-tighter">
          an idea ?
        </h1>
        <FlippingButton
          fromColor="black"
          toColor="white"
          title="Tell Us"
          inView={inView}
          className="text-9xl px-8 py-3 uppercase group-hover:text-black"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute bottom-10 left-28 flex gap-6">
          <FlippingButton
            fromColor="black"
            toColor="white"
            title="info@cuberto.com"
            inView={inView}
            className="text-xl px-8 py-3 uppercase group-hover:text-black"
          />

          <FlippingButton
            fromColor="black"
            toColor="white"
            title="+1 301 549 9309"
            inView={inView}
            className="text-xl px-8 py-3 uppercase group-hover:text-black"
          />
        </div>
        <h1 className="absolute left-[50vw] bottom-14 text-2xl uppercase">
          Privacy policy
        </h1>
        <p></p>
      </div>
    </section>
  );
};

export default Footer;
