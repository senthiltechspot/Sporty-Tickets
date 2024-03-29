import React, { useEffect, useMemo, useState } from "react";
import { ticketData } from "../Data/ticket";
import TicketCard from "./TicketCard";

const TicketSlider = () => {
  const [slideRange, setSlideRange] = useState({ start: 0, stop: 3 });

  const handleNext = () => {
    if (slideRange.stop < ticketData.length) {
      setSlideRange({ start: slideRange.start + 1, stop: slideRange.stop + 1 });
    }
  };

  const handlePrev = () => {
    if (slideRange.start > 0) {
      setSlideRange({ start: slideRange.start - 1, stop: slideRange.stop - 1 });
    }
  };

  useEffect(() => {
    // check for screen size less than 768px
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlideRange({ start: 0, stop: 1 });
      } else {
        // Update slide range for larger screen sizes
        setSlideRange({ start: 0, stop: 3 });
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const memoizedTicketData = useMemo(
    () => ticketData.slice(slideRange.start, slideRange.stop),
    [slideRange]
  );

  return (
    <div className="flex justify-between min-h-[200px] w-full my-5">
      <button className="w-[10%]" onClick={handlePrev}>
        <i className="bi bi-chevron-left border border-blue-500 text-blue-500 md:p-3 lg:px-3 lg:py-5 hover:text-white hover:bg-blue-500"></i>
      </button>
      <div className="w-[80%] flex justify-center gap-7">
        {memoizedTicketData.map((item) => (
          <TicketCard key={item.id} {...item} />
        ))}
      </div>
      <button className="w-[10%] " onClick={handleNext}>
        <i className="bi bi-chevron-right border border-blue-500 text-blue-500 md:p-3 lg:px-3 lg:py-5 hover:text-white hover:bg-blue-500"></i>
      </button>
    </div>
  );
};

export default TicketSlider;
