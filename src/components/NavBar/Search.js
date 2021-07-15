import "./Search.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const renderSearchButton = () => {
    if (searchTerm) {
      return (
        <button>
          <NavLink className="search" to={`/search/${searchTerm}`}>
            Search
          </NavLink>
        </button>
      );
    } else {
      return <button disabled>Search</button>;
    }
  };

  return (
    <header>
      <NavLink className="link-home" to={`/home`}>
        <h1>CUISINE AT HOME</h1>
      </NavLink>
      <form>
        <input
          type="text"
          placeholder="What would you like to cook?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {renderSearchButton()}
      </form>
    </header>
  );
};
