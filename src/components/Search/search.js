import React, { useState, useContext } from "react";
import RecipeContext from "../context/recipeContext/recipeContext";
import AlertContext from "../context/alertContext/alertContext";

const Search = () => {
  const recipeContext = useContext(RecipeContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert(
        "Oops! Enter a recipe or ingridient to search for.",
        "danger"
      );
    } else {
      recipeContext.searchRecipes(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-group">
        <input
          className="form-control mt-1 mb-1"
          type="text"
          name="text"
          placeholder="Find a recipe"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
