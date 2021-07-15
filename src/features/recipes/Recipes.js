import "./Recipe.css";
import React, { useCallback, useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams, useHistory } from "react-router-dom";

export const Recipes = ({ limit }) => {
  const { tags, page } = useParams();
  const history = useHistory();
  const p = parseInt(page, 10);
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

  const renderNext = () => {
    if (p >= Math.floor(recipes.length / 10)) {
      return (
        <button className="btn" type="button" disabled>
          Next
        </button>
      );
    } else {
      return (
        <button className="btn">
          <NavLink className="next" to={`/tags/${tags}/${p + 1}`}>
            Next
          </NavLink>
        </button>
      );
    }
  };

  if (!recipes) {
    return (
      <div className="error">
        Oh no! It looks like my daily quota of Spoonacular API requests is full.
        Please come back tomorrow.{" "}
      </div>
    );
  }

  return (
    <div className="collection">
      <h2 className="banner">
        <span>{tags.split("%2C").join(" / ").toUpperCase()}</span>
      </h2>
      <div className="collection-items">
        {p ? recipes.slice(12 * (p - 1), 12 * p) : recipes}
      </div>
      <div className="btn-back-next">
        {renderNext()}
        <p> {`${p} / ${Math.floor(recipes.length / 10)}`} </p>
        <button className="btn" onClick={history.goBack}>
          Previous
        </button>
      </div>
    </div>
  );
};
