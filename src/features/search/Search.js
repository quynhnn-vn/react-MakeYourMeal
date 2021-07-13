import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "../../api/api";
import { selectSearchTerm } from "./searchSlice";

export const Search = () => {
    // const dispatch = useDispatch();
    // const [searchTermLocal, setSearchTermLocal] = useState("");

    // const searchTerm = useSelector(selectSearchTerm);
    // const [recipes, setRecipes] = useState([]);
    
    // const handleTermChange = (e) => {
    //     setSearchTermLocal(e.target.value);
    // }

    

    // const handleSubmit = () => {
    //     searchRecipes(searchTerm).then(recipes => setRecipes(recipes.map(recipe => <Recipe recipe={recipe} />)));
    // }
    // return (
    //     <header>
    //         <div>
    //             <p><span>Cuisine</span>At Home</p>
    //         </div>
    //         <form>
    //             <input type="text"
    //             placeholder="What would you like to cook?"
    //             value={searchTerm}/>
    //         </form>
    //     </header>
    // )
    return (
        <></>
    )
}