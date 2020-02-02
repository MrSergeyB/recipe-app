import React, { useContext } from "react";
import RecipeItem from "../recipe-item/recipeItem";
import Spinner from "../spinner";
import RecipeContext from "../context/recipeContext/recipeContext";
import "./recipes.css";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { loading, recipes } = recipeContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="recipesStyle">
        {recipes.map(recipe => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
};

export default Recipes;
