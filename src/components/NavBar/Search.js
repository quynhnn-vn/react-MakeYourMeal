import "./Search.css";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export const Search = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push(`/search/${searchTerm}`);
    }
  };

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
          onKeyPress={handleKeyPress}
        />
        {renderSearchButton()}
      </form>
    </header>
  );
};
