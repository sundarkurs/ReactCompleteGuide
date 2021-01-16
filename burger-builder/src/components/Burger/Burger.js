import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = (props) => {
  console.log(props.ingredients["cheese"]);

  const transformedIngredients = Object.keys(props.ingredients).map(
    (igKey, index) => {
      const ingredientLayers = [...Array(props.ingredients[igKey])];
      return ingredientLayers.map((_, ind) => {
        return (
          <BurgerIngredient type={igKey} key={igKey + ind}></BurgerIngredient>
        );
      });
    }
  );

  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
