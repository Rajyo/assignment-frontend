import React from "react";
import { followUsData } from "@/lib/data";
import FollowUsCard from "./FollowUsCard";
import { CircularFollowUsText } from "./CircularText";
import InfiniteScroll from "./InfiniteScroll";
import FlippingButton from "./ui/flipping-button";

const FollowUs = () => {;
  return (
    <section className="w-screen bg-black text-white min-h-screen flex flex-col">
      <InfiniteScroll>
        <h1 className="text-[16rem] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
        <h1 className="text-[16rem] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
        <h1 className="text-[16rem] font-light whitespace-nowrap tracking-tighter">
          Follow Us
        </h1>
        <CircularFollowUsText />
      </InfiniteScroll>

      <div className="flex flex-col">
        <p className="pb-12 border-b-[1px] border-gray-400/50">
          <span className="text-2xl uppercase px-28 ">
            Social Media and Contacts
          </span>
        </p>

        <div className="flex flex-col">
          {followUsData.map((item) => (
            <FollowUsCard key={item.id} id={item.id} title={item.title} />
          ))}
        </div>
      </div>

      <div className="flex w-screen py-40">
        <div className="flex flex-col w-full gap-10 ml-28">
          <div className="flex flex-col">
            <h1 className="text-4xl font-light flex items-center gap-5">
              <span className="uppercase text-base">Main Office</span> 901 N
              Pitt Street
            </h1>
            <h1 className="text-4xl font-light">Alexandria VA, 22314</h1>
          </div>
          <FlippingButton
            fromColor="black"
            toColor="white"
            title="info@cuberto.com"
            className="text-3xl px-8 py-3 uppercase group-hover:text-black"
          />
        </div>
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col">
            <h1 className="text-4xl font-light flex items-center gap-5">
              <span className="uppercase text-base">Second Office </span> Na
              Perstyne
            </h1>
            <h1 className="text-4xl font-light">342/1, 11000 Prague</h1>
          </div>
          <FlippingButton
            fromColor="black"
            toColor="white"
            title="+1 301 549 9309"
            className="text-3xl px-8 py-3 uppercase group-hover:text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
