import "./HomePage.css";
import React, { useCallback, useEffect, useState } from "react";
import { RecipePreview } from "../RecipePreviews/RecipePreview";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams } from "react-router-dom";

export const HomePage = ({ tags }) => {
  const { page } = useParams();
  const p = isNaN(page) ? 0 : parseInt(page, 10);
  const [appetizer, setAppetizer] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);

  const renderRecipes = useCallback(() => {
    getRandomRecipes(tags.breakfast, 3).then((recipes) =>
      setBreakfast(
        recipes.map((recipe) => (
          <RecipePreview
            recipe={recipe}
            key={recipe.id}
            tags={tags.breakfast}
          />
        ))
      )
    );
    getRandomRecipes(tags.appetizer, 3).then((recipes) =>
      setAppetizer(
        recipes.map((recipe) => (
          <RecipePreview
            recipe={recipe}
            key={recipe.id}
            tags={tags.appetizer}
          />
        ))
      )
    );
    getRandomRecipes(tags.lunch, 3).then((recipes) =>
      setLunch(
        recipes.map((recipe) => (
          <RecipePreview recipe={recipe} key={recipe.id} tags={tags.lunch} />
        ))
      )
    );
  }, [tags]);

  useEffect(() => {
    renderRecipes();
    return () => {
      setAppetizer([]);
      setBreakfast([]);
      setLunch([]);
    }
  }, [renderRecipes]);

  return (
    <div>
      <div className="collection" aria-label="collection">
        <h2 className="banner" aria-label="banner">
          <span>BREAKFAST / BRUNCH </span>
          <span className="line"></span>
          <span>
            <NavLink
              className="view-more"
              aria-label="view-more"
              to={`/tags/${tags.breakfast}/${p + 1}`}
            >
              view more breakfast / brunch
            </NavLink>
          </span>
        </h2>
        <div className="collection-items">{breakfast}</div>
      </div>
      <div className="collection" aria-label="collection">
        <h2 className="banner" aria-label="banner">
          <span>APPETIZER / SNACK </span>
          <span className="line"></span>
          <span>
            <NavLink
              className="view-more"
              aria-label="view-more"
              to={`/tags/${tags.appetizer}/${p + 1}`}
            >
              view more appetizer / snack
            </NavLink>
          </span>
        </h2>
        <div className="collection-items">{appetizer}</div>
      </div>
      <div className="collection" aria-label="collection">
        <h2 className="banner" aria-label="banner">
          <span>LUNCH / DINNER</span>
          <span className="line"></span>
          <span>
            <NavLink
              className="view-more"
              aria-label="view-more"
              to={`/tags/${tags.lunch}/${p + 1}`}
            >
              view more lunch / dinner
            </NavLink>
          </span>
        </h2>
        <div className="collection-items">{lunch}</div>
      </div>
    </div>
  );
};
