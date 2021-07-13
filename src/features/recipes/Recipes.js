import "./Recipe.css";
import React, { useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams, useHistory } from "react-router-dom";

export const Recipes = ({ tags, limit }) => {
  const { page } = useParams();
  const history = useHistory();
  const p = parseInt(page, 10);
  const [recipes, setRecipes] = useState([]);

  const renderRecipes = () => {
    getRandomRecipes(tags, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} tags={tags} />
        ))
      )
    );
  };

  useEffect(() => {
    renderRecipes();
  }, []);

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
          <NavLink className="next" to={`/${tags}/${p + 1}`}>Next</NavLink>
        </button>
      );
    }
  };

  return (
    <div className="collection" aria-label="Appetizes / Snacks">
      <h2 className="banner">
        <span>{tags.split("%2C").join(" / ").toUpperCase()}</span>
      </h2>
      <div className="collection-items">
        {recipes.slice(12 * (p - 1), 12 * p)}
      </div>
      {!isNaN(p) && (
        <div className="btn-back-next">
          {renderNext()}
          <p> {`${p} / ${Math.floor(recipes.length/10)}`} </p>
          <button className="btn" onClick={history.goBack}>Previous</button>
        </div>
      )}
    </div>
  );
};
