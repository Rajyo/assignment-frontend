import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clipPath, slideUpInterval } from "@/lib/framer";

const FollowUsCard = ({
  id,
  title,
  inView,
}: {
  id: number;
  title: string;
  inView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={id}
      variants={slideUpInterval}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      custom={id * 0.25}
      exit="exit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full 2xl:h-40 xl:h-36 lg:h-32 md:h-28 sm:h-24 h-20 border-b-[1px] border-gray-400/50 flex justify-between items-center"
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key="hovered"
            className="flex items-center h-full whitespace-nowrap w-full bg-white text-black"
            variants={clipPath}
            initial="initial"
            animate={isHovered ? "animate" : "exit"}
            exit="exit"
          >
            {[...Array(15)].map((_, index) => (
              <motion.p
                key={index}
                initial={{ x: 0 }}
                animate={{ x: "-1000%" }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  easings: "linear",
                  repeatType: "loop",
                }}
                className="whitespace-nowrap tracking-normal flex 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[400px]:text-base text-sm  items-center lg:gap-10 sm:gap-6 gap-4 h-full"
              >
                <span>{title}</span>
                <ArrowUpRight className="lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6 lg:mr-10 sm:mr-6 mr-4" />
              </motion.p>
            ))}
          </motion.div>
        ) : (
          <React.Fragment key="not-hovered">
            <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[400px]:text-base text-sm 2xl:ml-28 xl:ml-24 lg:ml-20 md:ml-16 sm:ml-12 ml-6">{title}</h1>
            <ArrowUpRight className="2xl:mr-28 xl:mr-24 lg:mr-20 md:mr-16 sm:mr-12 mr-6 2xl:w-14 xl:w-11 lg:w-12 md:w-10 sm:w-8 2xl:h-14 xl:h-11 lg:h-12 md:h-10 sm:h-8" />
          </React.Fragment>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FollowUsCard;
