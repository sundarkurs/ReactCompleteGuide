import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
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
