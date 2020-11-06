import React from "react";
import "./Layout.css";
import Toolbar from "../../../src/components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../src/components/Navigation/SideDrawer/SideDrawer";
class Layout extends React.Component {
  state = { showSideDrawer: false };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <>
        <Toolbar showDr={this.sideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerHandler}
        />
        {/*this.sideDrawervisible}*/}
        <main className="Content">{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
