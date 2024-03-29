import { Advertisement } from "@/utils/interface";
import Image from "next/image";
import React from "react";

const AdvertisementComponent: React.FC<Advertisement> = ({
  id,
  img,
  name,
  desc,
}) => (
  <div
    key={id}
    className="dark:bg-[#3B3E47] bg-white lg:w-[237px] dark:text-white text-black p-2 drop-shadow-md"
  >
    <div className=" border border-emerald-700 h-full">
      <div className="relative">
        <Image
          src={img}
          alt="advertisement"
          width={200}
          height={200}
          className="w-full"
        />
        <h3 className="absolute top-0 right-0 bg-black text-[#DFDFDF] font-semibold py-1 px-4">
          Ad
        </h3>
      </div>
      <div className="px-3">
        <h1 className="font-semibold py-3 capitalize text-md lg:text-lg">
          {name}
        </h1>
        <p className="font-normal text-[10px] mb-3 lg:text-sm">{desc}</p>
      </div>
    </div>
  </div>
);

export default AdvertisementComponent;
