import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchRecipes, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchRecipes(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Recipes"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
