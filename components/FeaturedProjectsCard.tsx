import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import StickyCursor from "./StickyCursor";
import { motion, useInView } from "framer-motion";
import { slideUpInterval } from "@/lib/framer";

const FeaturedProjectsCard = ({
  id,
  video,
  image,
  title,
  description,
}: {
  id: number;
  video: string;
  image: string;
  title: string;
  description: string;
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "100px 100px -50px -50px",
  });

  const videoHoverOnPlay = () => {
    setIsVideoPlaying(true);
    videoRef?.current?.play();
  };
  const videoPause = () => {
    setIsVideoPlaying(false);
    videoRef?.current?.pause();
  };

  return (
    <motion.div
      ref={ref}
      key={id}
      variants={slideUpInterval}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      className="grid gap-4 my-10 relative cursor-pointer"
      onMouseEnter={videoHoverOnPlay}
      onMouseLeave={videoPause}
    >
      <video
        src={video}
        ref={videoRef}
        loop
        muted
        className={`rounded-4xl w-[100%] h-[100%] ${
          isVideoPlaying ? "block" : "hidden"
        }`}
      />
      <Image
        src={image}
        alt="project"
        unoptimized
        width={100}
        height={100}
        className={`rounded-4xl w-[100%] h-[100%] ${
          isVideoPlaying ? "hidden" : "block"
        }`}
      />
      <h1 className="text-3xl max-w-[75%] tracking-tight">
        <span className="font-bold">{title}</span>{" "}
        <span className="px-2">-</span> {description}
      </h1>

      <StickyCursor
        stickyElement={ref as RefObject<HTMLDivElement>}
        title="Explore"
      />
    </motion.div>
  );
};

export default FeaturedProjectsCard;
