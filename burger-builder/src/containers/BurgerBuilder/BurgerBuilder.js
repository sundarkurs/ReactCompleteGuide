import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 1,
      bacon: 1,
    },
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}></Burger>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
