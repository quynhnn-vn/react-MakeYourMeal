import "./Recipe.css";
import React, { useCallback, useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams, useHistory, useLocation } from "react-router-dom";
import { searchRecipes } from "../../api/api";

export const Recipes = ({ tags, limit }) => {
  const { page, term } = useParams();
  const history = useHistory();
  const p = parseInt(page, 10);
  const [recipes, setRecipes] = useState([]);

  const renderRecipes = useCallback(
    () => {
      getRandomRecipes(tags, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} tags={tags} />
        ))
      )
    );
    },
    [tags, limit]
  );

  const renderSearchRecipes = () => {
    searchRecipes(term, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)
      )
    );
  };

  const handleRender = () => {
    if (!isNaN(p)) {renderRecipes()}
    else {renderSearchRecipes()}
  }
  useEffect(() => {
    renderRecipes()
  }, [term, renderRecipes]);

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
          <NavLink className="next" to={`/${tags}/${p + 1}`}>
            Next
          </NavLink>
        </button>
      );
    }
  };

  return (
    // <div>{location.pathname}</div>
    <div className="collection">
      <h2 className="banner">
        {tags ? (<span>{tags.split("%2C").join(" / ").toUpperCase()}</span>) : (<span>Search Results</span>)}
      </h2>
      <div className="collection-items">
        {p ? recipes.slice(12 * (p - 1), 12 * p) : recipes}
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
