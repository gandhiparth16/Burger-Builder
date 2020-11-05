import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <button onClick={props.showDr}>Menu</button>
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
