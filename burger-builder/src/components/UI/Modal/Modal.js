import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} closeBackdrop={props.modalClosed}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-1000vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default modal;
