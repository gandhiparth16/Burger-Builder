import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}{" "}
      </li>
    ); //{props.INGREDIENT_PRICES[igKey]*props.ingredients[igKey]}
  });
  return (
    <Aux>
      <h3> Order Summary</h3>
      <ul> {ingredientSummary} </ul>
      <p>Continue!!</p>
    </Aux>
  );
};

export default orderSummary;
