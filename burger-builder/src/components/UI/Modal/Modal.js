import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends Component {

  // The below life cycle hooks will avoid rendering the itself 
  // and it's child elements (OrderSummary) unnecessarily 
  // Try it out by returning true always to see the additional renders.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Modal] shouldComponentUpdate");
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log("[Modal] componentWillUpdate");
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop
          showBackdrop={this.props.show}
          closeBackdrop={this.props.modalClosed}
        ></Backdrop>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? "translateY(0)"
              : "translateY(-1000vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
