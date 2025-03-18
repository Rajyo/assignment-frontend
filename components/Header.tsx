import { useRef, useState } from "react";
import Magnetic from "./ui/magnetic";
import StickyCursor from "./StickyCursor";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideSidebarLeft,
  slideSidebarOpacity,
  slideSidebarTextOpacity,
} from "@/lib/framer";
import { followUsData, navbarData } from "@/lib/data";
import { useRouter } from "next/navigation";

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className="flex justify-between items-center w-screen sm:px-14 sm:py-10 px-5 py-8 relative">
        <h1 onClick={() => router.push("/")} className="text-3xl font-bold tracking-tight">cuberto</h1>

        <span className="text-black text-2xl font-light tracking-tighter pr-24 sm:flex hidden">
          menu
        </span>
        <div className="fixed sm:top-9 sm:right-0 top-7 -right-12 flex w-full justify-end p-[10px] cursor-pointer mix-blend-difference z-[51]">
          <Magnetic>
            <div
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`relative flex gap-[5px] flex-col pointer-events-none ${
                isSidebarOpen
                  ? "cross px-[90px] py-[15px]"
                  : "bounds px-[75px] py-[10px]"
              }`}
            >
              <div
                ref={ref}
                className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-[3]"
              ></div>
            </div>
          </Magnetic>
        </div>
        <StickyCursor stickyElement={ref as React.RefObject<HTMLDivElement>} />
      </header>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <>
            <motion.section
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideSidebarOpacity}
              onClick={() => setIsSidebarOpen(false)}
              className="w-[100vw] h-screen bg-black/30 fixed top-0 left-0 z-[30]"
            ></motion.section>

            <motion.section
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideSidebarLeft}
              className="md:w-[50vw] w-[100vw] h-[100svh] bg-white fixed top-0 right-0 z-[40] flex flex-col gap-20 justify-center items-center"
            >
              <div className="md:flex hidden"></div>
              <div className="md:flex hidden"></div>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideSidebarTextOpacity}
                className="grid sm:grid-cols-12 lg:w-[70%] sm:w-[75%] w-[90%] mx-auto lg:gap-10 gap-6"
              >
                <div className="sm:flex hidden flex-col gap-14 sm:col-span-5 ">
                  <h1 className="text-gray-400/70 text-lg tracking-tight">
                    Social media
                  </h1>

                  <p className="flex flex-col gap-4 justify-evenly">
                    {followUsData.map((item) => (
                      <span
                        key={item.id}
                        onClick={() => router.push(item.link)}
                        className="lg:text-[1.25vw] md:text-[1.75vw] text-[3vw] tracking-tight font-light hover:cursor-pointer"
                      >
                        {item.title}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex flex-col sm:gap-14 gap-10 sm:col-span-7">
                  <h1 className="text-gray-400/70 text-lg tracking-tight">
                    Menu
                  </h1>
                  <p className="flex flex-col gap-4">
                    {navbarData.map((item) => (
                      <span
                        key={item.id}
                        onClick={() => router.push(item.link)}
                        className="lg:text-[3vw] md:text-[4vw] sm:text-[6vw] text-[10vw] leading-tight tracking-tighter font-light hover:cursor-pointer"
                      >
                        {item.title}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideSidebarTextOpacity}
                className="sm:grid flex min-[350px]:flex-row flex-col  grid-cols-12 lg:w-[70%] sm:w-[75%] w-[90%] mx-auto gap-8"
              >
                <p className="flex flex-col gap-4 col-span-5">
                  <span className="text-lg tracking-tight text-gray-400/50">
                    Get in touch
                  </span>
                  <span onClick={() => window.open("mailto:info@cuberto.com")} className="lg:text-[1.5vw] md:text-[2vw] text-xl leading-tight tracking-tight font-light pb-2 border-b-[1px] border-gray-400 w-max hover:cursor-pointer">
                    info@cuberto.com
                  </span>
                </p>

                <p className="flex flex-col gap-4 col-span-7">
                  <span className="text-transparent pb-1 min-[350px]:flex hidden">
                    Workflow
                  </span>
                  <span onClick={() => router.push("https://hello.cuberto.com")} className="lg:text-[1.5vw] md:text-[2vw] text-xl leading-tight tracking-tight font-light pb-2 border-b-[1px] border-gray-400 w-max hover:cursor-pointer">
                    Our workflow
                  </span>
                </p>
              </motion.div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
