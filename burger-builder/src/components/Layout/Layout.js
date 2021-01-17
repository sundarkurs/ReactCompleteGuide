import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar></Toolbar>
        <SideDrawer
          show={this.state.showSideDrawer}
          close={this.sideDrawerCloseHandler}
        ></SideDrawer>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
