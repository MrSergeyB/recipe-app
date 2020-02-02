import React, { Fragment } from "react";
import Spinner from "../spinner";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const content = recipe ? (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="card grid-2 all-center">
            <img
              className="card-img"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
          </div>
          <h5 className="text-center card-title">
            {recipe.recipe.label.length < 20
              ? `${recipe.recipe.label}`
              : `${recipe.recipe.label.substring(0, 20)}`}
          </h5>
          <Fragment>
            <Link
              to={`/recipe/${recipe.recipe.label}`}
              className="btn btn-outline-warning btn-block my-1"
            >
              More
            </Link>
          </Fragment>
        </div>
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );
  return <div>{content}</div>;
};

export default RecipeItem;
