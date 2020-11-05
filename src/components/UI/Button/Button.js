import React from "react";
import "./Button.css";

const button = (props) => {
  const btnType = props.btnType;
  let btnClass = "Button";
  switch (btnType) {
    case "Success":
      btnClass = btnClass.concat(".Success");
      break;
    case "Danger":
      btnClass = btnClass.concat(".Danger");
      break;
    default:
      btnClass = btnClass.concat(".Plain");
      break;
  }
  console.log(btnClass);

  return (
    <button className={btnClass} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
