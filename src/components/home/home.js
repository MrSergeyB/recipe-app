import React, { Fragment } from "react";
import Search from "../search/search";
import Recipes from "../recipes/recipes";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Recipes />
    </Fragment>
  );
};

export default Home;
