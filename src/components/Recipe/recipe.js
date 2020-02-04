import React, { useEffect, useContext } from "react";
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";
import RecipeContext from "../context/recipeContext/recipeContext";
import "./recipe.css";

const Recipe = ({ match }) => {
  const recipeContext = useContext(RecipeContext);
  const { getRecipe, loading, recipe } = recipeContext;

  useEffect(() => {
    getRecipe(match.params.label);

    // eslint-disable-next-line
  }, []);

  console.log(recipe);

  if (loading) return <Spinner />;

  const content = recipe ? (
    <div className="div">
      <h2 className="card-title text-center">{recipe.label}</h2>
      <div className="card grid-2 all-center">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="card-image-top singleRecipeImage"
        />
        <div className="card-body">
          <h3>Ingredients:</h3>
          <ul className="card-text">
            {recipe.ingredientLines.map(lines => (
              <li key={lines}>{lines}</li>
            ))}
          </ul>
          <Link to="/" className="btn btn-outline-primary">
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Spinner />
    </div>
  );

  return <div>{content}</div>;
};

export default Recipe;
