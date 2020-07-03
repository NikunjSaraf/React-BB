import React from "react";
import Spinner from "../ui/Spinner";
import DeathItems from "./DeathItems";

const DeathGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <section>
          <DeathItems key={item.death_id} item={item}></DeathItems>
          <hr style={{ color: "red" }} />
        </section>
      ))}
    </section>
  );
};

export default DeathGrid;
