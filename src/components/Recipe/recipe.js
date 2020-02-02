import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";
import RecipeContext from "../context/recipeContext/recipeContext";
import "./recipe.css";

const Recipe = ({ match }) => {
  const recipeContext = useContext(RecipeContext);
  const { getRecipe, loading, recipe } = recipeContext;

  useEffect(() => {
    console.log("lalal" + match.params.id);
    getRecipe(match.params.id);

    // eslint-disable-next-line
  }, []);

  console.log(recipe);

  if (loading) return <Spinner />;

  const content = recipe ? (
    <Fragment>
      <h2 className="text-center">{recipe.label}</h2>
      <div className="card grid-2 all-center">
        <img src={recipe.image} alt={recipe.label} className="img-fluid" />
        <ul>
          {recipe.ingredientLines.map(lines => (
            <li>{lines}</li>
          ))}
        </ul>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
      </div>
    </Fragment>
  ) : (
    <div>
      <Spinner />
    </div>
  );

  return <div>{content}</div>;
};

export default Recipe;
