import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Auxiliary>
    <Toolbar></Toolbar>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;
