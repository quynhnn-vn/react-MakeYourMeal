import React from "react";
import "./App.css";
import { Recipes } from "./features/recipes/Recipes";
import { Search } from "./features/search/Search";
import { Home } from "./components/Home";
import { SearchResults } from "./features/search/SearchResults";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { RecipeDetails } from "./features/recipes/RecipeDetails";

function App() {
  const tags = {
    breakfast: ["breakfast", "brunch"].join("%2C"),
    appetizer: ["appetizer", "snack"].join("%2C"),
    lunch: ["lunch", "dinner"].join("%2C"),
  };
  return (
    <div className="App">
      <Router>
        <Search />
        <Switch>
          <Route path={`/search/:term`}>
            <SearchResults limit={3} />
          </Route>
          <Route path={`/tags/:tags/:page`}>
            <Recipes limit={30} />
          </Route>
          <Route path="/recipe/:id/:title">
            <RecipeDetails tags={tags} />
          </Route>
          <Route path="/home">
            <Home tags={tags} />
          </Route>
          <Route exact path="/">
            <Home tags={tags} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
