import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar";
import NotFound from "../not-found/notfound";
import Home from "../home/home";
import Alert from "../alert";
import About from "../about";
import Recipe from "../recipe";

import RecipeState from "../context/recipeContext/recipeState";
import AlertState from "../context/alertContext/alertState";

import "./App.css";

const App = () => {
  return (
    <RecipeState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/recipe/:label" component={Recipe} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </RecipeState>
  );
};

export default App;
