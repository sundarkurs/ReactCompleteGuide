import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./OrderSummary.module.css";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredients[igKey]}
        </li>
      );
    }
  );

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Some text goes here..</p>
      <ul>{ingredientSummary}</ul>
    </Auxiliary>
  );
};

export default orderSummary;
