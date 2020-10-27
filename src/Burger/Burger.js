import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    //[salad,bacon,meat]
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      //Array(length).map(value,index)
      return <BurgerIngredient key={igKey + i} type={igKey} />; //key used to give unique identitiy
    });
  });
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
