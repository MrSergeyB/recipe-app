import React from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./recipes.css";

const Recipes = ({ recipes, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="recipesStyle">
        {recipes.map(rec => (
          <div key={rec.id} className="text-center recipe">
            <h2>
              {rec.recipe.label.length < 20
                ? `${rec.recipe.label}`
                : `${rec.recipe.label.substring(0, 25)}...`}
            </h2>
            <img src={rec.recipe.image} alt="" className="recipeImage" />
            <div>
              <Link
                to={{
                  pathname: `/recipe/${rec.recipe.label}`
                }}
                className="btn btn-dark btn-sm my-1"
              >
                VIEW RECIPE
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Recipes;
