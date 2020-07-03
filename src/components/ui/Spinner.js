import React from "react";
import spinner from "../../img/spinner.gif";
const Spinner = () => {
  return (
    <img
      src={spinner}
      width="200"
      height="200"
      alt="Loading..."
      style={{ display: "block", margin: "auto" }}
    />
  );
};

export default Spinner;
