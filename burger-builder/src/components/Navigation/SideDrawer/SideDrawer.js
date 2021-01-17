import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.show){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  
  return (
    <Auxiliary>
      <Backdrop showBackdrop={props.show} closeBackdrop={props.close} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
