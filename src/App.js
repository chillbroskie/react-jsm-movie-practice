import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=959dd6ef";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="Spiderman"
          onChange={() => {}}
        />
        <img src={SearchIcon} />
      </div>
    </div>
  );
};

export default App;
