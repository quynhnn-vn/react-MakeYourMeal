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

  return (
    <header>
      <button>
        <NavLink to={`/home`}>
          <span>CUISINE</span> at Home
        </NavLink>
      </button>
      <form>
        <input
          type="text"
          placeholder="What would you like to cook?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button>
          <NavLink className="search" to={`/search/${searchTerm}`}>
            Search
          </NavLink>
        </button>
      </form>
    </header>
  );
};
