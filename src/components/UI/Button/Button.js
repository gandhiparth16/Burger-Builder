import React from "react";
import "./Button.css";

const button = (props) => {
  const btnType = props.btntype;
  let btnClass = null;
  if (btnType === "Success") {
    btnClass = "Button.Success";
  } else if (btnType === "Danger") {
    btnClass = "Button.Danger";
  }
  console.log(btnClass);

  return (
    <button className={btnClass} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
