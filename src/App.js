import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
import Recipe from "./components/Recipe";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    recipes: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
  //   );

  //   this.setState({ recipes: res.data.hits, loading: false });
  // }

  searchRecipes = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.edamam.com/search?q=${text}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
    );

    this.setState({ recipes: res.data.hits, loading: false });
  };

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { recipes, loading, alert } = this.state;
    return (
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
                      searchRecipes={this.searchRecipes}
                      setAlert={this.setAlert}
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
    );
  }
}

export default App;
