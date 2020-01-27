import React, { useEffect, useState, Fragment } from "react";
import Spinner from "../Spinner/spinner";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./recipe.css";

const Recipe = ({ match }) => {
  const [activeRecipe, setActiveRecipe] = useState(null);

  useEffect(() => {
    const recipeReq = match.params.id;

    const fetchData = async () => {
      const req = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeReq}&app_id=${process.env.REACT_APP_EMAMA_APP_ID}&app_key=${process.env.REACT_APP_EMAMA_APP_KEY}`
      );
      setActiveRecipe(req.data.hits[0].recipe);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(activeRecipe);

  const content = activeRecipe ? (
    <Fragment>
      <h2 className="text-center">{activeRecipe.label}</h2>
      <div className="card grid-2 all-center">
        <img src={activeRecipe.image} alt={activeRecipe.label} />
        <ul>
          {activeRecipe.ingredientLines.map(lines => (
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
};

export default Recipe;

Recipe.propTypes = {
  loading: PropTypes.bool
};
