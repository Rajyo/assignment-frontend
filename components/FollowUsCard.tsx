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
      className="w-full h-40 border-b-[1px] border-gray-400/50 flex justify-between items-center"
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
                className="whitespace-nowrap tracking-normal flex text-4xl items-center gap-10 h-full"
              >
                <span>{title}</span>
                <ArrowUpRight className="w-10 h-10 mr-10" />
              </motion.p>
            ))}
          </motion.div>
        ) : (
          <React.Fragment key="not-hovered">
            <h1 className="text-4xl ml-28">{title}</h1>
            <ArrowUpRight className="mr-28 w-14 h-14" />
          </React.Fragment>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FollowUsCard;
