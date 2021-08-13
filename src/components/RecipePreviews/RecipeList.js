import "./RecipePreview.css";
import React, { useCallback, useEffect, useState } from "react";
import { RecipePreview } from "./RecipePreview";
import { getRandomRecipes } from "../../api/api";
import { NavLink, useParams, useHistory } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { listPlaceholder } from "../HomePage/HomePage";

export const RecipeList = ({ limit }) => {
  const { tags, page } = useParams();
  const history = useHistory();
  const p = parseInt(page, 10);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderRecipes = useCallback(() => {
    getRandomRecipes(tags, limit).then((recipes) =>
      {
        setRecipes(
          recipes.map((recipe) => (
            <RecipePreview
              recipe={recipe}
              key={recipe.id}
              tags={tags ? tags : ""}
            />
          ))
        );
        setIsLoading(false);
      }
    );
  }, [tags, limit]);

  useEffect(() => {
    renderRecipes();
    return () => {
      setRecipes([]);
      setIsLoading(true);
    };
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
        <NavLink className="next" to={`/tags/${tags}/${p + 1}`}>
          Next
        </NavLink>
      );
    }
  };

  return (
    <div className="collection">
      <h2 className="banner">
        {tags ? (
          <span>{tags.split("%2C").join(" / ").toUpperCase()}</span>
        ) : (
          <span></span>
        )}
      </h2>
      <ReactPlaceholder ready={!isLoading} customPlaceholder={listPlaceholder} showLoadingAnimation={true}>
      <div className="collection-items" aria-label="collection-items">
        {p ? recipes.slice(9 * (p - 1), 9 * p) : recipes}
      </div>
      </ReactPlaceholder>
      <div className="btn-back-next">
        {renderNext()}
        <p> {`${p} / ${Math.floor(recipes.length / 9)}`} </p>
        <button className="btn" onClick={history.goBack}>
          Previous
        </button>
      </div>
    </div>
  );
};
