import React from "react";
import bb from "../../img/bb.png";
const EpisodeItems = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={bb} alt="" />
        </div>
        <div className="card-back">
          <h1>Season: {item.season}</h1>
          <ul>
            <li>
              <strong>Title:</strong>
              {item.title}
            </li>
            <li>
              <strong>Episode No:</strong> {item.episode}
            </li>
            <li>
              <strong>Air Date:</strong> {item.air_date}
            </li>
            <li>
              <strong>Charaters:</strong> {item.characters}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItems;
