import { Ticket } from "@/utils/interface";
import Image from "next/image";
import React from "react";

const CutOutEffect = () => (
  <div className="w-full my-5 relative shadow-lg px-7">
    <div className="border-b-2 border-dashed"></div>
    <div className="absolute -top-3 right-0 bg-gradient-to-bl from-transparent via-[#D9D9D9] dark:via-[#221A2C] to-transparent text-[#DFDFDF] font-semibold py-[12px] px-[6.5px] rounded-l-full clip-corner-top-right"></div>
    <div className="absolute -top-3 left-0 bg-gradient-to-br from-transparent via-[#D9D9D9] dark:via-[#221A2C] to-transparent text-[#DFDFDF] font-semibold py-[12px] px-[6.5px] rounded-r-full clip-corner-top-left"></div>
  </div>
);

const TicketCard: React.FC<Ticket> = ({
  id,
  title,
  date,
  location,
  ctaText,
  img,
  isActive,
}) => (
  <div key={id} className="dark:bg-[#3B3E47] bg-white w-[257px] drop-shadow-lg">
    <Image
      src={img}
      alt={title}
      height={200}
      width={237}
      className="w-full px-3 pt-3 pb-3"
    />
    <CutOutEffect />
    <div className="px-3 flex-col flex items-center justify-between gap-3 pb-3">
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="font-normal">{date}</p>
      <p className="font-normal text-sm text-center">{location}</p>
      <button className="w-full bg-black text-[#DFDFDF] font-semibold">
        <p className="font-semibold text-center py-3">{ctaText}</p>
      </button>
    </div>
  </div>
);

export default TicketCard;