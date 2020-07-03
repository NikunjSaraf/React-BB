import React from "react";
import EpisodeItems from "./EpisodeItems";
import Spinner from "../ui/Spinner";

const EpisodeGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <EpisodeItems key={item.episode_id} item={item}></EpisodeItems>
      ))}
    </section>
  );
};

export default EpisodeGrid;
