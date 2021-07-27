import "./RecipeDetails.css";
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
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const renderRecipeInfo = useCallback(() => {
    getRecipeInfo(id).then((recipe) => {
      setRecipe(recipe);
      setTypes(recipe.dishTypes);
      setDiets(recipe.diets);
      setInstructions(
        recipe.analyzedInstructions.map((instruction) =>
          instruction.steps.map((item) => item.step)
        )
      );
      setIngredients(
        recipe.extendedIngredients.map((ingredient) => ingredient.original)
      );
    });
  }, [id]);

  useEffect(() => {
    renderRecipeInfo();
  }, [renderRecipeInfo]);

  return (
    <div className="details">
      <div className="description-container">
        {recipe.image ? <img src={recipe.image} alt="" />: <img src="%PUBLIC_URL%/error.jpg" alt=""/>}
        <div className="description">
          <h2>{recipe.title}</h2>
          <p>{ReactHtmlParser(recipe.summary)}</p>
        </div>
        <div className="other-info-container">
          <div className="other-info">
            <div className="tags">
              TAGS:{" "}
              {types.map((type) => (
                <NavLink to={`/tags/${type}/1`}>
                  <span>{`#${type} `}</span>
                </NavLink>
              ))}
            </div>
            <div>
              DIETS:{" "}
              {diets.length === 0
                ? "None"
                : diets.map((diet) => (
                    <NavLink className="tags" to={`/tags/${diet}/1`}>
                      <span>{`#${diet} `}</span>
                    </NavLink>
                  ))}
            </div>
          </div>
          <div className="other-info">
            <div>
              READY IN: <span>{recipe.readyInMinutes} minutes</span>
            </div>
            <div>
              SERVINGS: <span>{recipe.servings} persons</span>
            </div>
          </div>
          <div className="other-info">
            <div>
              SPOONACULAR SCORE: <span>{recipe.spoonacularScore}</span>
            </div>
            <div>
              HEALTH SCORE: <span>{recipe.healthScore}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="instruction-container">
        <div className="ingredient">
          <h2>INGREDIENTS</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <input type="checkbox" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="instruction">
          <h2>INSTRUCTIONS</h2>
          <ul>
            {instructions.map((instruction) =>
              instruction.map((step, index) => <li key={index}>{step}</li>)
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
