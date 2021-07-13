import "./Recipe.css";
import React from "react";
import ReactHtmlParser from "react-html-parser";

export const Recipe = ({ recipe, tags }) => {
    return (
        <button className="collection-item">
            <img src={recipe.image} alt="" />
            <div className="item-container">
                <h3>{tags.split("%2C").join(" / ").toUpperCase()}</h3>
                <h2>{recipe.title}</h2>
                <p>{ ReactHtmlParser(recipe.summary) }</p>
            </div>
        </button>
    )
}