import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 1,
  meat: 2,
  bacon: 2,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  updatePurchaseState () {
    const ingredients = { ...this.state.ingredients };
    const values = Object.keys(ingredients)
      .map((igKey, index) => {
        return ingredients[igKey];
      })
      .reduce((values, el) => {
        return values + el;
      }, 0);

    this.setState({ purchasable: values > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = newCount;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal + INGREDIENT_PRICES[type];

    
    this.setState({ ingredients: updateIngredients, totalPrice: newTotal }, function () {
      // Calling update method on callback to get the latest state otherwise 
      // the state will return old because it's state updates are asynchronous
      this.updatePurchaseState();
    });
    
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const newCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = newCount;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal - INGREDIENT_PRICES[type];

    this.setState({ ingredients: updateIngredients, totalPrice: newTotal }, function () {
      this.updatePurchaseState();
    });
  };

  render() {
    const lessDisableInfo = { ...this.state.ingredients };
    for (let key in lessDisableInfo) {
      lessDisableInfo[key] = lessDisableInfo[key] <= 0;
    }

    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          lessDisableInfo={lessDisableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        ></BuildControls>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
