import { useRef } from "react";
import Magnetic from "./ui/magnetic";
import StickyCursor from "./StickyCursor";

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <header className="flex justify-between items-center w-screen px-14 py-10 relative">
      <h1 className="text-3xl font-bold tracking-tight">cuberto</h1>

      <span className="text-black text-2xl font-light tracking-tighter pr-24">
        menu
      </span>
      <div className="fixed top-4 right-8 flex w-full justify-end p-[10px] cursor-pointer mix-blend-difference z-[1]">
        <Magnetic>
          <div className="relative flex gap-[5px] flex-col p-[30px] pointer-events-none bounds">
            <div
              ref={ref}
              className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-[3]"
            ></div>
          </div>
        </Magnetic>
      </div>
      <StickyCursor stickyElement={ref as React.RefObject<HTMLDivElement>}  />
    </header>
  );
};

export default Header;
