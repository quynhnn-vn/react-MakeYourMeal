import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { getRecipeInfo } from "../../api/api";
import ReactHtmlParser from "react-html-parser";
import { NavLink } from "react-router-dom";

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [types, setTypes] = useState([]);
  const [diets, setDiets] = useState([]);

  const renderRecipeInfo = useCallback(() => {
    getRecipeInfo(id).then((recipe) => {
      setRecipe(recipe);
      setTypes(recipe.dishTypes);
      setDiets(recipe.diets);
    });
  }, [id]);

  useEffect(() => {
    renderRecipeInfo();
  }, [renderRecipeInfo]);

  return (
    <div>
      <img src={recipe.image} alt="" />
      <h2>{recipe.title}</h2>
      <p>{ReactHtmlParser(recipe.summary)}</p>
      <div>
        <div>
          Tags:
          {types.map((type) => (
            <NavLink to={`/tags/${type}/1`}>
              <h4>{type}</h4>
            </NavLink>
          ))}
        </div>
        <div>
          Diets:
          {diets.length === 0 ? "None" : diets.map((diet) => <h4>{diet}</h4>)}
        </div>
        <div>Ready In: {recipe.readyInMinutes} minutes</div>
        <div>Servings: {recipe.servings} persons</div>
      </div>
      <p>{ReactHtmlParser(recipe.instructions)}</p>
    </div>
  );
};
