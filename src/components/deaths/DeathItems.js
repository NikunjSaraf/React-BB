import React from "react";
import bb from "../../img/bb.png";

const DeathItems = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={bb}
            alt=""
            width="50"
            height="50"
            style={{ display: "block" }}
          />
        </div>
        <div className="card-back">
          <h1>{item.death}</h1>
          <ul>
            <li>
              <strong>Cause:</strong> {item.cause}
            </li>
            <li>
              <strong>Responsible:</strong> {item.responsible}
            </li>
            <li>
              <strong>Season:</strong> {item.season}
            </li>
            <li>
              <strong>Episode:</strong>
              {item.episode}
            </li>
            <li>
              <strong>Last Words:</strong>
              {item.last_words}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeathItems;
