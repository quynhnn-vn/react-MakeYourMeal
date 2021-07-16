import React from "react";
import "./App.css";
import { RecipeList } from "./components/RecipePreviews/RecipeList";
import { Search } from "./components/NavBar/Search";
import { HomePage } from "./components/HomePage/HomePage";
import { SearchResults } from "./components/NavBar/SearchResults";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function App() {
  const tags = {
    breakfast: ["breakfast", "brunch"].join("%2C"),
    appetizer: ["appetizer", "snack"].join("%2C"),
    lunch: ["lunch", "dinner"].join("%2C"),
    desserts: ["desserts"],
    drinks: ["drinks"],
  };
  return (
    <div className="App">
      <Router>
        <Search tags={tags} />
        <Switch>
          <Route path={`/search/:term`}>
            <SearchResults limit={3} />
          </Route>
          <Route path={`/tags/:tags/:page`}>
            <RecipeList limit={10} />
          </Route>
          <Route path="/recipe/:id/:title">
            <RecipeDetails tags={tags} />
          </Route>
          <Route path="/home">
            <HomePage tags={tags} />
          </Route>
          <Route exact path="/">
            <HomePage tags={tags} />
          </Route>
        </Switch>
      </Router>
      <footer>
        Copyright
        <FontAwesomeIcon icon={faCopyright} color="white" size="2x"/>
        <a href="https://spoonacular.com/" target="_blank" rel="noreferrer">
          SPOONACULAR API
        </a>
      </footer>
    </div>
  );
}

export default App;
