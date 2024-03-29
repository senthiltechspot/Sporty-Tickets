import React, { useState } from "react";
import { playersData } from "../Data/player";
import { adImg } from "@/assets"; // Assuming adImg is a local image file
import { Advertisement, Player } from "@/utils/interface";
import PlayerComponent from "./PlayerComponent";
import AdvertisementComponent from "./AdvertisementComponent";

const Players = () => {
  const ad: Advertisement = {
    type: "ad",
    id: 1,
    name: "Advertisement title",
    img: adImg, // Assuming adImg is a local image file
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  // Create a new array with advertisement inserted at the 5th position
  const updatedPlayersData = [
    ...playersData.slice(0, 4),
    ad,
    ...playersData.slice(4),
  ];

  const [displayedPlayers, setDisplayedPlayers] = useState(5);

  const loadMorePlayers = () => {
    setDisplayedPlayers(displayedPlayers + 5);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl py-3 capitalize mb-3 underline underline-offset-[13px]" style={{ textDecorationColor: '#738FFF' }}>Sports</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-3">
        {updatedPlayersData
          .slice(0, displayedPlayers)
          .map((item: any) =>
            item.type && item.type === "ad" ? (
              <AdvertisementComponent
                {...(item as Advertisement)}
                key={item.id}
              />
            ) : (
              <PlayerComponent {...(item as Player)} key={item.id} />
            )
          )}
      </div>
      <div className="flex justify-center mt-7">
        {displayedPlayers < updatedPlayersData.length && (
          <button
            className="bg-blue-500 text-white p-1 sm:px-3 sm:py-2 rounded-md"
            onClick={loadMorePlayers}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Players;
