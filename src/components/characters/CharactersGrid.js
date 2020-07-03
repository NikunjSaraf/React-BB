import React from "react";
import CharatersItem from "./CharatersItem";
import Spinner from "../ui/Spinner";

const CharactersGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharatersItem key={item.char_id} item={item}></CharatersItem>
      ))}
    </section>
  );
};
export default CharactersGrid;
