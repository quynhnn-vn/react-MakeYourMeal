import "./RecipePreview.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const RecipePreview = ({ recipe, tags }) => {
  return (
    <NavLink
      className="collection-item"
      to={`/recipe/${recipe.id}/${recipe.title
        .toLowerCase()
        .split(" ")
        .join("-")}`}
    >
      {recipe.image ? (
        <img src={recipe.image} alt="" />
      ) : (
        <img src="./error.jpg" alt="" />
      )}
      <span className="item-container" aria-label="item-container">
        {tags && <h3>{tags.split("%2C").join(" / ").toUpperCase()}</h3>}
        <h2>{recipe.title}</h2>
        {recipe.summary && <p>{recipe.summary.replace(/(<([^>]+)>)/gi, "")}</p>}
      </span>
    </NavLink>
  );
};
