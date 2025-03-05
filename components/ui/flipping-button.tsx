import { useRef } from "react";
import { motion } from "framer-motion";

const FlippingButton = ({
  fromColor,
  toColor,
  title,
  className,
}: {
  title: string;
  className?: string;
  fromColor?: string;
  toColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleButtonHover = () => {
    if (ref.current) {
      ref.current.style.scale = "1.025";
      ref.current.style.transition = "all 0.4s ease-in-out";

      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.scale = "1";
        ref.current.style.transition = "all 0.4s ease-in-out";
      }, 400);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleButtonHover}
      className={`relative overflow-hidden group z-10 w-fit rounded-full ${fromColor}`}
      whileHover="hover"
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative z-20 block overflow-hidden w-full h-full rounded-full border-[1px] border-${toColor} text-${toColor} group-hover:text-${fromColor} ${className}`}
      >
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-105%" },
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="inline-block whitespace-nowrap"
          >
            {title}
          </motion.span>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="inline-block whitespace-nowrap"
            >
              {title}
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 bg-${toColor}`}
        initial={{
          scaleY: 0,
          originY: 1.25,
          borderRadius: "100%",
          transition: {
            duration: 0.75,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        variants={{
          hover: {
            scaleY: 1,
            originY: 1,
            borderRadius: "0%",
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
        style={{
          top: 0,
          left: 0,
        }}
      />
    </motion.div>
  );
};

export default FlippingButton;
