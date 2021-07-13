import React from "react";
import "./App.css";
import { Recipes } from "./features/recipes/Recipes";
import { Search } from "./features/search/Search";
import { Breakfast } from "./components/Breakfast";
import { Appetizes } from "./components/Appetizes";
import { Lunch } from "./components/Lunch";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const tags = {
    breakfast: ["breakfast", "brunch"].join("%2C"),
    appetizes: ["appetizes", "snacks"].join("%2C"),
    lunch: ["lunch", "dinner"].join("%2C"),
  };
  return (
    <div className="App">
      <Router>
        <Search />
        <Switch>
          <Route path={`/${tags.appetizes}/:page`}>
            <Redirect to={`/${tags.appetizes}/1`} />
            <Recipes tags={tags.appetizes} limit={30} />
          </Route>
          <Route path={`/search/:term`}>
            <Recipes limit={3}/>
          </Route>
          {/* <Route path={`/${tags.breakfast}`}>
            <Breakfast tags={tags.breakfast} limit={10} />
          </Route>
          <Route path={`/${tags.lunch}`}>
            <Lunch tags={tags.lunch} limit={10} />
          </Route> */}
          <Route exact path="/">
            <Home tags={tags} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
