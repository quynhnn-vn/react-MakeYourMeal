import "./HomePage.css";
import React, { useCallback, useEffect, useState } from "react";
import { RecipePreview } from "../RecipePreviews/RecipePreview";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { TextBlock, RectShape } from "react-placeholder/lib/placeholders";

export const listPlaceholder = (
  <div className="list-placeholder">
    <div>
      <RectShape color="#f0e3e4" style={{ width: "300px", height: "200px" }} />
      <TextBlock rows={5} color="#d6cdcd" style={{ height: "50px" }} />
    </div>
    <div>
      <RectShape color="#f0e3e4" style={{ width: "300px", height: "200px" }} />
      <TextBlock rows={5} color="#d6cdcd" style={{ height: "50px" }} />
    </div>
    <div>
      <RectShape color="#f0e3e4" style={{ width: "300px", height: "200px" }} />
      <TextBlock rows={5} color="#d6cdcd" style={{ height: "50px" }} />
    </div>
  </div>
);

export const HomePage = ({ tags }) => {
  const { page } = useParams();
  const p = isNaN(page) ? 0 : parseInt(page, 10);
  const [appetizer, setAppetizer] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const errorMessage =
    "Oh no! It looks like my daily quota of Spoonacular API requests is full. Please come back tomorrow.";

  const renderRecipes = useCallback(() => {
    getRandomRecipes(tags.breakfast, 3).then((recipes) => {
      if (recipes) {
        setBreakfast(
          recipes.map((recipe) => (
            <RecipePreview
              recipe={recipe}
              key={recipe.id}
              tags={tags.breakfast}
            />
          ))
        );
        setIsLoading(false);
      } else {
        alert(errorMessage);
      }
    });
    getRandomRecipes(tags.appetizer, 3).then((recipes) =>
      recipes
        ? setAppetizer(
            recipes.map((recipe) => (
              <RecipePreview
                recipe={recipe}
                key={recipe.id}
                tags={tags.appetizer}
              />
            ))
          )
        : null
    );
    getRandomRecipes(tags.lunch, 3).then((recipes) =>
      recipes
        ? setLunch(
            recipes.map((recipe) => (
              <RecipePreview
                recipe={recipe}
                key={recipe.id}
                tags={tags.lunch}
              />
            ))
          )
        : null
    );
  }, [tags]);

  useEffect(() => {
    renderRecipes();
    return () => {
      setAppetizer([]);
      setBreakfast([]);
      setLunch([]);
      setIsLoading(true);
    };
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
        <ReactPlaceholder ready={!isLoading} customPlaceholder={listPlaceholder} showLoadingAnimation={true}>
          <div className="collection-items">{breakfast}</div>
        </ReactPlaceholder>
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
        <ReactPlaceholder ready={!isLoading} customPlaceholder={listPlaceholder} showLoadingAnimation={true}>
          <div className="collection-items">{appetizer}</div>
        </ReactPlaceholder>
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
        <ReactPlaceholder ready={!isLoading} customPlaceholder={listPlaceholder} showLoadingAnimation={true}>
          <div className="collection-items">{lunch}</div>
        </ReactPlaceholder>
      </div>
    </div>
  );
};
