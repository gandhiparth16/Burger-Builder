import React from "react";
import NavigationItems from "../NavigationItems";
import Logo from "../../Logo/Logo";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = "SideDrawer";
  if (props.open) {
    attachedClasses = attachedClasses.concat(" Open");
  } else {
    attachedClasses = attachedClasses.concat(" Close");
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <Logo height="15%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
