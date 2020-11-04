import React from "react";
import "./Burger.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //[salad,bacon,meat]
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //Array(length)
        //Array(individual iglength).map(value,index)
        return <BurgerIngredient key={igKey + i} type={igKey} />; //key used to give unique identitiy
      }); //[[bacon],[salad]]
    })
    .reduce((arr, el) => {
      return arr.concat(el); //[salad,bacon]
    }, []); //reduce(prev_val,curr_val)=>{callback_array},initial_value of reduced value
  console.log(
    transformedIngredients
  ); /*before reduce (4) [Array(1), Array(1), Array(2), Array(2)]
  0: Array(1)
  0: Object
  type: ƒ BurgerIngredient() {}
  key: "salad0"
  ref: null
  props: Object
  type: "salad"
  _owner: FiberNode
  _store: Object*/
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Let's prepare your burger</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
