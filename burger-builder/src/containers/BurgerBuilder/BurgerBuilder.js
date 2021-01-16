import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <Burger></Burger>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
