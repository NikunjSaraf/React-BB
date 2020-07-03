import React, { useState, useEffect } from "react";
import Header from "../ui/Header";
import axios from "axios";
import CharactersGrid from "./CharactersGrid";
import Search from "../ui/Search";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetch();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default Home;
