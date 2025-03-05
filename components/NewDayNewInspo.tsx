import React, { RefObject, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { newDayNewInspoData } from "@/lib/data";
import { Volleyball } from "lucide-react";
import InfiniteScroll from "./InfiniteScroll";
import StickyCursor from "./StickyCursor";

const NewDayNewInspo = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-screen bg-white text-black min-h-screen flex flex-col">
      <InfiniteScroll>
        <h1 className="text-[16rem] whitespace-nowrap tracking-tighter">
          New Day --
        </h1>
        <h1 className="text-[16rem] whitespace-nowrap tracking-tighter italic font-light">
          New Inspo
        </h1>
        <video
          src="/videos/newdaynewinspo.mp4"
          autoPlay
          loop
          muted
          className="w-[15rem] h-fit rounded-full"
        />
        <h1 className="text-[16rem] whitespace-nowrap tracking-tighter">
          New Day --
        </h1>
        <h1 className="text-[16rem] whitespace-nowrap tracking-tighter italic font-light">
          New Inspo
        </h1>
        <video
          src="/videos/newdaynewinspo.mp4"
          autoPlay
          loop
          muted
          className="w-fit h-fit rounded-full"
        />
      </InfiniteScroll>

      <motion.div
        ref={scrollRef}
        drag="x"
        dragConstraints={{ left: -2500, right: 0 }}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ width: "max-content" }}
        className="grid grid-flow-col gap-10 whitespace-nowrap pt-20 pb-60 overflow-x-scroll w-full scrollbar-hide cursor-grab active:cursor-grabbing pl-[9vw]"
      >
        {newDayNewInspoData.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 w-[24rem]">
            <Image
              src={item.image}
              alt={`image-${item.id}`}
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="w-fit h-fit rounded-3xl object-cover"
            />
            <p className="flex items-center gap-3 pl-2">
              <Volleyball className="w-5 h-5" />
              <span className="text-xl">cuberto</span>
            </p>
          </div>
        ))}
      </motion.div>
        <StickyCursor stickyElement={scrollRef as RefObject<HTMLDivElement>} title="Drag" />
    </section>
  );
};

export default NewDayNewInspo;
