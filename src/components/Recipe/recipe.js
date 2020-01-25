import React, { Component } from "react";
import axios from "axios";
import "./recipe.css";

export default class Recipe extends Component {
  state = {
    activeRecipe: {},
    loading: false
  };

  componentDidMount = async () => {
    const recipeReq = this.props.match.params.id;
    const req = await axios.get(
      `https://api.edamam.com/search?q=${recipeReq}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
    );

    this.setState({ activeRecipe: req.data.hits[0], loading: false });
  };

  render() {
    const { activeRecipe } = this.state;
    return (
      <div>
        {!activeRecipe.recipe.recipe.label ? null : (
          <h2>{activeRecipe.recipe.label}</h2>
        )}
      </div>
    );
  }
}
