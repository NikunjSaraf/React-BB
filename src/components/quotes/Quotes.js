import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../ui/Header";
import QuoteGrid from "./QuoteGrid";
function Quotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/quotes?series=Breaking+Bad`
      );
      console.log(results.data);

      setItems(results.data);
      setIsLoading(false);
    };
    fetchQuotes();
  }, []);
  return (
    <div className="container">
      <Header />
      <QuoteGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default Quotes;
