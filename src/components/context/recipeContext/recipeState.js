import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./recipeContext";
import RecipeReducer from "./recipeReducer";
import {
  SEARCH_RECIPES,
  SET_ALERT,
  GET_RECIPE,
  SET_LOADING,
  REMOVE_ALERT
} from "../types";

const RecipeState = props => {
  const initialState = {
    recipe: null,
    recipes: [],
    loading: false
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  //Search Recipes
  const searchRecipes = async text => {
    setLoading();
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${text}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
    );
    dispatch({
      type: SEARCH_RECIPES,
      payload: res.data.hits
    });
  };

  //Get Recipe

  const getRecipe = async recipeName => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
    );
    dispatch({
      type: GET_RECIPE,
      payload: res.data.hits[0].recipe
    });
  };

  //Set loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <RecipeContext.Provider
      value={{
        recipe: state.recipe,
        recipes: state.recipes,
        loading: state.loading,
        searchRecipes,
        getRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
