import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../ui/Header";
import EpisodeGrid from "./EpisodeGrid";
function Episode() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`
      );
      console.log(results.data);

      setItems(results.data);
      setIsLoading(false);
    };
    fetchEpisode();
  }, []);
  return (
    <div className="container">
      <Header />
      <EpisodeGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default Episode;
