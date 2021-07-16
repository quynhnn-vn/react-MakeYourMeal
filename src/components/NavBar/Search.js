import "./Search.css";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCookieBite,
  faHamburger,
  faIceCream,
  faCocktail,
} from "@fortawesome/free-solid-svg-icons";

export const Search = ({ tags }) => {
  const { page } = useParams();
  const p = isNaN(page) ? 0 : parseInt(page, 10);
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
        <h1>MAKE YOUR MEAL</h1>
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
      <div className="tags-container">
          <NavLink className="tags-item" to={`/tags/${tags.breakfast}/${p + 1}`}>
            <FontAwesomeIcon icon={faCoffee} color="white" size="2x" />
            <span>Breakfast/Burnch</span>
          </NavLink>
          <NavLink className="tags-item" to={`/tags/${tags.appetizer}/${p + 1}`}>
            <FontAwesomeIcon icon={faCookieBite} color="white" size="2x" />
            <span>Appetizer/Snack</span>
          </NavLink>
          <NavLink className="tags-item" to={`/tags/${tags.lunch}/${p + 1}`}>
            <FontAwesomeIcon icon={faHamburger} color="white" size="2x" />
            <span>Lunch/Dinner</span>
          </NavLink>
          <NavLink className="tags-item" to={`/tags/${tags.desserts}/${p + 1}`}>
            <FontAwesomeIcon icon={faIceCream} color="white" size="2x" />
            <span>Desserts</span>
          </NavLink>
          <NavLink className="tags-item" to={`/tags/${tags.drinks}/${p + 1}`}>
            <FontAwesomeIcon icon={faCocktail} color="white" size="2x" />
            <span>Drinks</span>
          </NavLink>
        </div>
    </header>
  );
};
