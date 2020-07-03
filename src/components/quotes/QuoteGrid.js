import React from "react";
import QuoteItems from "./QuoteItems";
import Spinner from "../ui/Spinner";

const QuoteGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <QuoteItems key={item.quote_id} item={item}></QuoteItems>
      ))}
    </section>
  );
};

export default QuoteGrid;
