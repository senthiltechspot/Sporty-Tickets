import { Player } from "@/utils/interface";
import Image from "next/image";
import React from "react";

const PlayerComponent: React.FC<Player> = ({
  id,
  name,
  img,
  events,
  sports,
}) => (
  <div
    key={id}
    className="dark:bg-[#3B3E47] bg-white p-2 lg:w-[237px] drop-shadow-md"
  >
    <Image src={img} alt={name} height={200} width={200} className="w-full" />
    <h3 className="font-semibold py-3 capitalize h-[70px] lg:h-auto">{name}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#F7F7F8] dark:bg-[#292B32] p-2">
      <div>
        <h3 className="dark:text-[#DFDFDF]">Total Events</h3>
        <p className="font-medium text-lg">{events} Events</p>
      </div>
      <div>
        <h3 className="dark:text-[#DFDFDF]">Sports</h3>
        <p className="font-medium text-lg">{sports}</p>
      </div>
    </div>
  </div>
);

export default PlayerComponent;
