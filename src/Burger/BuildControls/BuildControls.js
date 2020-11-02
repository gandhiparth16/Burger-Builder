import React from "react";
import "./BuildControls.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price : <b>{props.totalPrice.toFixed(2)}</b>/-
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className="OrderButton" disabled={!props.purchasable}>
      Order Now
    </button>
  </div>
);

export default buildControls;
