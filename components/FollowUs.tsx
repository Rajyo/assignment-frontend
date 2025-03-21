import React, { useRef } from "react";
import { followUsData } from "@/lib/data";
import FollowUsCard from "./FollowUsCard";
import { CircularFollowUsText } from "./CircularText";
import InfiniteScroll from "./InfiniteScroll";
import FlippingButton from "./ui/flipping-button";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { slideUpInterval } from "@/lib/framer";

const FollowUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useInView(ref, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section
      ref={container}
      className="w-screen bg-black text-white flex flex-col"
    >
      <InfiniteScroll>
        <h1 className="text-[16vw] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
        <h1 className="text-[16vw] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
        <h1 className="text-[16vw] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
      </InfiniteScroll>

      <div className="flex flex-col">
        <p className="pb-12 border-b-[1px] border-gray-400/50">
          <span className="xl:text-2xl lg:text-xl sm:text-lg min-[400px]:text-base text-sm uppercase 2xl:ml-28 xl:ml-24 lg:ml-20 md:ml-16 sm:ml-12 ml-6 ">
            Social Media and Contacts
          </span>
        </p>

        <div className="flex flex-col">
          <AnimatePresence>
            {followUsData.map((item) => (
              <FollowUsCard
                key={item.id}
                id={item.id}
                title={item.title}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          ref={ref}
          variants={slideUpInterval}
          initial="initial"
          animate={inViewRef ? "animate" : "exit"}
          exit="exit"
          custom={0}
          className="flex sm:flex-row flex-col w-screen sm:py-40 py-20 ml-6 sm:ml-0 gap-16 sm:gap-0"
        >
          <div className="flex flex-col w-full sm:gap-10 gap-6 2xl:ml-28 xl:ml-24 lg:ml-20 md:ml-16 sm:ml-12">
            <div className="flex flex-col">
              <h1 className="lg:text-[2.25vw] md:text-[2.75vw] sm:text-[3vw] text-[5vw] leading-tight font-light flex items-center gap-5">
                <span className="uppercase text-base">Main Office</span> 901 N
                Pitt Street
              </h1>
              <h1 className="lg:text-[2.25vw] md:text-[2.75vw] sm:text-[3vw] text-[5vw] leading-tight font-light">Alexandria VA, 22314</h1>
            </div>
            <FlippingButton
              fromColor="black"
              toColor="white"
              title="info@cuberto.com"
              inView={inView}
              className="sm:text-[2vw] text-[3vw] px-8 py-3 uppercase group-hover:text-black"
            />
          </div>
          <div className="flex flex-col w-full sm:gap-10 gap-6">
            <div className="flex flex-col">
              <h1 className="lg:text-[2.25vw] md:text-[2.75vw] sm:text-[3vw] text-[5vw] leading-tight font-light flex items-center gap-5">
                <span className="uppercase text-base">Second Office </span> Na
                Perstyne
              </h1>
              <h1 className="lg:text-[2.25vw] md:text-[2.75vw] sm:text-[3vw] text-[5vw] leading-tight font-light">342/1, 11000 Prague</h1>
            </div>
            <FlippingButton
              fromColor="black"
              toColor="white"
              title="+1 301 549 9309"
              inView={inView}
              className="sm:text-[2vw] text-[3vw] px-8 py-3 uppercase group-hover:text-black"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default FollowUs;
