import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { searchRecipes } from "../../api/api";
import { Recipe } from "../recipes/Recipe";

export const SearchResults = ({ limit }) => {
  const { term } = useParams();
  const [recipes, setRecipes] = useState([]);

  const renderSearchRecipes = useCallback(() => {
    searchRecipes(term, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)
      )
    );
  }, [term, limit]);

  useEffect(() => {
      renderSearchRecipes()
  }, [renderSearchRecipes]);

  if (term && recipes.length === 0) {
    return <div className="error">No recipe result matching "{term}".</div>;
  }
  return (
    <div className="collection">
      <h2 className="banner">
        <span>Search Results</span>
      </h2>
      <div className="collection-items">{recipes}</div>
    </div>
  );
};
