import React from "react";
import { CircularContactText } from "./CircularText";

const Contact = () => {
  return (
    <div className="z-50 lg:flex hidden">
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
