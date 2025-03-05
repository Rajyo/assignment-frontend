import React from "react";
import FlippingButton from "./ui/flipping-button";

const Description = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] h-[60%] flex justify-center items-center">
        <video
          src="/videos/description.mp4"
          className="w-1/2 h-full mr-20"
          autoPlay
          loop
          muted
        />

        <div className="w-1/2 flex flex-col gap-10">
          <p className="text-[40.32px] leading-tight tracking-tight mb-10 max-w-[90%]">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>

          <FlippingButton
            fromColor="white"
            toColor="black"
            title="What we do"
            className="text-4xl px-[10rem] py-[6rem] group-hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
