import React, { RefObject, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { newDayNewInspoData } from "@/lib/data";
import { Volleyball } from "lucide-react";
import InfiniteScroll from "./InfiniteScroll";
import StickyCursor from "./StickyCursor";
import { opacity } from "@/lib/framer";

const NewDayNewInspo = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, {
    margin: "100px 100px -50px -50px",
  });

  return (
    <section ref={container} className="w-screen bg-white/50 text-black flex flex-col">
      <InfiniteScroll>
        <h1 className="text-[16vw] whitespace-nowrap tracking-tighter">
          New Day --
        </h1>
        <h1 className="text-[16vw] whitespace-nowrap tracking-tighter italic font-light">
          New Inspo
        </h1>
        <video
          src="/videos/newdaynewinspo.mp4"
          autoPlay
          loop
          muted
          className="w-[15vw] h-fit rounded-full"
        />
        <h1 className="text-[16vw] whitespace-nowrap tracking-tighter">
          New Day --
        </h1>
        <h1 className="text-[16vw] whitespace-nowrap tracking-tighter italic font-light">
          New Inspo
        </h1>
        <video
          src="/videos/newdaynewinspo.mp4"
          autoPlay
          loop
          muted
          className="w-[15vw] h-fit rounded-full"
        />
      </InfiniteScroll>

      <motion.div
        ref={scrollRef}
        drag="x"
        dragConstraints={container}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ width: "max-content" }}
        className="grid grid-flow-col sm:gap-10 gap-5 whitespace-nowrap sm:pt-20 sm:pb-60 pt-10 pb-20 lg:px-28 md:px-20 sm:px-14 px-12 overflow-x-scroll w-full scrollbar-hide cursor-grab active:cursor-grabbing "
      >
        {newDayNewInspoData.map((item) => (
          <motion.div variants={opacity} initial="initial" animate={inView ? "animate" : "exit"} key={item.id} className="flex flex-col gap-5 lg:w-[25vw] md:w-[40vw] sm:w-[50vw] w-[75vw] group">
            <Image
              src={item.image}
              alt={`image-${item.id}`}
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="w-full h-fit rounded-3xl object-cover group-hover:scale-[0.98] transition-all duration-300 ease-in-out"
            />
            <p className="flex items-center gap-3 pl-2">
              <Volleyball className="w-5 h-5" />
              <span className="text-xl">cuberto</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
        <StickyCursor stickyElement={scrollRef as RefObject<HTMLDivElement>} title="Drag" />
    </section>
  );
};

export default NewDayNewInspo;
