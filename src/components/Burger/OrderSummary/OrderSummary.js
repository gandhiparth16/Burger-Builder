import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong> Total amount : {props.totalprice.toFixed(2)} </strong>
      </p>
      <p>Continue!!</p>
      <p
        style={{
          display: "flex",
          alignItems: "column",
          justifyContent: "spaceBetween"
        }}
      >
        <Button btntype="Success" clicked={props.continue}>
          CONTINUE
        </Button>
        <Button btntype="Danger" clicked={props.cancel}>
          CANCEL
        </Button>
      </p>
    </Aux>
  );
};

export default orderSummary;
