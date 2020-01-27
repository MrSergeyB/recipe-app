import React, { Component, Fragment } from "react";
import Spinner from "../Spinner/spinner";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./recipe.css";

export default class Recipe extends Component {
  state = {
    activeRecipe: null,
    loading: false
  };

  componentDidMount = async () => {
    const recipeReq = this.props.match.params.id;
    const req = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeReq}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
    );

    this.setState({ activeRecipe: req.data.hits[0].recipe, loading: false });
  };

  static propTypes = {
    loading: PropTypes.bool
  };

  render() {
    console.log(this.state.activeRecipe);

    const content = this.state.activeRecipe ? (
      <Fragment>
        <h2 className="text-center">{this.state.activeRecipe.label}</h2>
        <div className="card grid-2 all-center">
          <img
            src={this.state.activeRecipe.image}
            alt={this.state.activeRecipe.label}
          />
          <ul>
            {this.state.activeRecipe.ingredientLines.map(lines => (
              <li>{lines}</li>
            ))}
          </ul>
        </div>
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
        </Fragment>
      </Fragment>
    ) : (
      <Spinner />
    );
    return <div>{content}</div>;
  }
}
