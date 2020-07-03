import React, { Fragment } from "react";

const QuoteItems = ({ item }) => {
  return (
    <Fragment>
      <div>
        <p>Quote:</p>
        <div className="container-quote">{item.quote}</div>
      </div>
      <div>
        <p>Author:</p>
        <div className="container-quote">{item.author}</div>
      </div>
    </Fragment>
  );
};

export default QuoteItems;
