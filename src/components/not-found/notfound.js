import React, { Fragment } from "react";
import Search from "../search/search";
import Recipes from "../recipes/recipes";

const Notfound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
    </div>
  );
};

export default Notfound;
