import React from "react";
import TicketSlider from "./TicketSlider";

const Ticket = () => {
  return (
    <div className="bg-[#F9F8FF] border shadow-sm dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] w-full flex flex-col justify-center items-center my-7 ">
      <div className="text-center p-3 lg:p-16">
        <h2 className="text-4xl font-bold mb-5">Collection Spotlight</h2>
        <p className="text-md">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <TicketSlider />
    </div>
  );
};

export default Ticket;
