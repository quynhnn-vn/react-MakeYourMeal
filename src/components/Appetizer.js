import "./Components.css";
import React, { useCallback, useEffect, useState } from "react";
import { Recipe } from "../features/recipes/Recipe";
import { getRandomRecipes } from "../api/api";
import { NavLink, useParams } from "react-router-dom";

export const Appetizer = ({ tags, limit }) => {
  const { page } = useParams();
  const p = isNaN(page) ? 0 : parseInt(page, 10);
  const [recipes, setRecipes] = useState([]);

  const renderRecipes = useCallback(() => {
    getRandomRecipes(tags, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} tags={tags} />
        ))
      )
    );
  }, [tags, limit]);

  useEffect(() => {
    renderRecipes();
  }, [renderRecipes]);

  const handleViewMore = () => {
    renderRecipes();
  };

  return (
    <div className="collection" aria-label="Appetizer / Snack">
      <h2 className="banner">
        <span>APPETIZER / SNACK </span>
        <span className="line"></span>
        <span>
          <button className="btn pull-right" onClick={handleViewMore}>
            <NavLink className="view-more" to={`/tags/${tags}/${p + 1}`}>
              view more appetizer / snacks{" "}
            </NavLink>
          </button>
        </span>
      </h2>
      <div className="collection-items">{recipes}</div>
    </div>
  );
};
