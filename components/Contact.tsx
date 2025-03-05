import React from "react";
import { CircularContactText } from "./CircularText";

const Contact = () => {
  return (
    <div className="z-50">
      {/* <Image
        src="/contact.svg"
        alt="contact"
        width={100}
        height={100}
        className="fixed bottom-8 right-8 w-36 h-36 rotate-infinite"
      /> */}
      <div className="fixed bottom-3 right-3">
        <CircularContactText />
      </div>
      <video
        src="/videos/contact.mp4"
        autoPlay
        loop
        muted
        className="w-24 h-24 rounded-full fixed bottom-14 right-14"
      ></video>
    </div>
  );
};

export default Contact;
