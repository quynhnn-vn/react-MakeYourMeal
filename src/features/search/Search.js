import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header>
      <div>
        <p>
          <span>Cuisine</span>At Home
        </p>
      </div>
      <form>
        <input
          type="text"
          placeholder="What would you like to cook?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
