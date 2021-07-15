import "./RecipePreview.css";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { NavLink } from "react-router-dom";

export const RecipePreview = ({ recipe, tags }) => {
  return (
    <button className="collection-item">
      <NavLink
        to={`/recipe/${recipe.id}/${recipe.title
          .toLowerCase()
          .split(" ")
          .join("-")}`}
      >
        {recipe.image ? <img src={recipe.image} alt="" />: <img src="./error.jpg" alt=""/>}
        <div className="item-container">
          {tags && <h3>{tags.split("%2C").join(" / ").toUpperCase()}</h3>}
          <h2>{recipe.title}</h2>
          {recipe.summary && <p>{ReactHtmlParser(recipe.summary)}</p>}
        </div>
      </NavLink>
    </button>
  );
};
