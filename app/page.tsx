"use client";

import Description from "@/components/Description";
import { RefObject, useRef } from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import Intro from "@/components/Intro";
import NewDayNewInspo from "@/components/NewDayNewInspo";
import Philosophy from "@/components/Philosophy";
import Resources from "@/components/Resources";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import StickyCursor from "@/components/StickyCursor";
import Header from "@/components/Header";

export default function Home() {
  const videoRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="w-screen min-h-screen flex flex-col">
      <Header />

      <Intro />

      <div ref={videoRef}>
        <video src="/videos/video.mp4" autoPlay loop muted />
        <StickyCursor
          stickyElement={videoRef as RefObject<HTMLDivElement>}
          title="play"
        />{" "}
      </div>

      <Description />

      <FeaturedProjects />

      <Philosophy />

      <Resources />

      <NewDayNewInspo />

      <FollowUs />

      <Footer />

      <Contact />
    </main>
  );
}
