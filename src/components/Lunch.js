import "./Components.css";
import React, { useEffect, useState } from "react";
import { Recipe } from "../features/recipes/Recipe";
import { getRandomRecipes } from "../api/api";
import {
  NavLink,
  useParams,
  useHistory,
} from "react-router-dom";

export const Lunch = ({ tags, limit }) => {
  const { page } = useParams();
  const history = useHistory();
  const p = parseInt(page, 10);
  const [recipes, setRecipes] = useState([]);
  const renderRecipes = () => {
    getRandomRecipes(tags, limit).then((recipes) =>
      setRecipes(
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} tags={tags} />)
      )
    );
  };

  useEffect(() => {
    renderRecipes();
  }, []);

  const handleViewMore = () => {
    renderRecipes();
  };

  return (
    <div className="collection" aria-label="Lunch / Dinner">
      <h2 className="banner">
        <span>LUNCH / DINNER</span>
        <span className="line"></span>
        <span className="btn-collection">
        <button className="pull-right" onClick={handleViewMore}>
            <NavLink className="navlink" to={`/${tags}/${p + 1}`}>view more lunch / dinner </NavLink>
          </button>
        </span>
      </h2>
      <div className="collection-items">
        {recipes}
      </div>
    </div>
  );
};
