import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../ui/Header";
import DeathGrid from "./DeathGrid";

function Death() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchDeaths = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/deaths`);
      console.log(results.data);

      setItems(results.data);
      setIsLoading(false);
    };
    fetchDeaths();
  }, []);
  return (
    <div className="container">
      <Header />
      <DeathGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default Death;
