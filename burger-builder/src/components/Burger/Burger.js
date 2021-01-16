import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = (props) => {
  /* Logic: 
    Object.keys(object}) -> returns all the properties of an object as array of string items
    props.ingredients[igKey] -> returns the vlaue of the passed property
    [...Array(2)] -> returns an array of two empty items
    
  */
 debugger;

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

  // reduce() have been used to remove the items which doesn't have any element in the array
  let ingredientElements = transformedIngredients.reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if(ingredientElements.length === 0){
    ingredientElements = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {ingredientElements}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
