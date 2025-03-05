import React from "react";
import { motion } from "framer-motion";

export const CircularFollowUsText = () => {
  return (
    <div className="w-fit rounded-full border-2 border-black relative rotate-infinite bg-white p-2">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
         m -75, 0
         a 75,75 0 1,1 150,0
         a 75,75 0 1,1 -150,0"
          />
        </defs>
        <circle cx="100" cy="100" r="75" fill="none" stroke="transparent" />
        <text fill="#000" fontSize="20">
          <textPath
            href="#circlePath"
            startOffset="66%"
            fontSize={"18px"}
            fontStretch={"wider"}
            fontWeight={400}
          >
            P R O D U C T .
          </textPath>
          <textPath
            href="#circlePath"
            startOffset="33%"
            fontSize={"18px"}
            fontStretch={"wider"}
            fontWeight={400}
          >
            D E S I G N .
          </textPath>
          <textPath
            href="#circlePath"
            startOffset="0%"
            fontSize={"18px"}
            fontStretch={"wider"}
            fontWeight={400}
          >
            I D E N T I T Y .
          </textPath>
        </text>
      </svg>

      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(0deg) translateZ(0)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.5 * index,
            }}
            className="absolute left-1/2 top-1/2 h-[100px] w-[100px] rounded-[50%] border-4 border-black bg-transparent"
          ></motion.div>
        ))}
      </div>
    </div>
  );
};


export const CircularContactText = () => {
    return (
      <div className="w-fit rounded-full relative rotate-infinite">
        <svg width="180" height="180" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
           m -67.5, 0
           a 67.5,67.5 0 1,1 135,0
           a 67.5,67.5 0 1,1 -135,0"
            />
          </defs>
          <circle cx="100" cy="100" r="67.5" fill="none" stroke="transparent" />
          <text fill="gray" fontSize="18">
          <textPath
              href="#circlePath"
              startOffset="93.5%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              -
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="75%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              c o n t a c t
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="68.5%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              -
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="50%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              c o n t a c t
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="43.5%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              -
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="25%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              c o n t a c t
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="18.5%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              -
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="0%"
              fontSize={"12px"}
              fontStretch={"wider"}
              fontWeight={800}
            >
              c o n t a c t
            </textPath>
          </text>
        </svg>
      </div>
    );
  };
