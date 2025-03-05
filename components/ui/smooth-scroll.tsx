"use client";

import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }

    const handleScrollToTop = () => {
      if (lenis) {
        lenis.start();
        window.scrollTo(0, 0);
      }
    };

    handleScrollToTop();
  }, [pathname, lenis]);

  return (
    <ReactLenis className="h-full" options={{ lerp: 0.1 }} root>
      {children}
    </ReactLenis>
  );
};