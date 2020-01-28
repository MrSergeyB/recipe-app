import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
import Recipe from "./components/Recipe";
import axios from "axios";
import RecipeState from "./components/context/recipeContext/recipeState";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
  //   );

  //   this.setState({ recipes: res.data.hits, loading: false });
  // }

  

  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <RecipeState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
      
                      setAlert={showAlert}
                    />

                    <Recipes loading={loading} recipes={recipes} />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/recipe/:id" component={Recipe} />
            </Switch>
          </div>
        </div>
      </Router>
    </RecipeState>
  );
};

export default App;
