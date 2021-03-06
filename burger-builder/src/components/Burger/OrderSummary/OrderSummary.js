import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";
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
      <h3>Your Burger</h3>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Price: $ {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue checkout?</p>

      <Button clicked={props.purchaseCancel} btnType="Danger">
        Cancel
      </Button>

      <Button clicked={props.purchaseContinue} btnType="Success">
        Continue
      </Button>

    </Auxiliary>
  );
};

export default orderSummary;
