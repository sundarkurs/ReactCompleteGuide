import React from "react";
import "./Cockpit.css";

const cockpit = (props) => {
  // Inline styling
  const showButtonStyle = {
    backgroundColor: "grey",
    color: "white",
    padding: "15px 32px",
    display: "inline-block",
    border: "1px solid black",
    fontAlign: "center",
    fontSize: "16px",
  };

  const hideButtonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "15px 32px",
    display: "inline-block",
    border: "1px solid black",
    fontAlign: "center",
    fontSize: "16px",
  };

  // Building dynamic classes
  const usersListClass = [];
  if (props.usersCount <= 2) {
    usersListClass.push("red");
  }

  if (props.usersCount <= 1) {
    usersListClass.push("bold");
  }

  return (
    <div className="cockpit">
      <button
        style={props.showUsers ? hideButtonStyle : showButtonStyle}
        onClick={props.toggleButton}
      >
        {props.showUsers ? "Hide Users" : "Show Users"}
      </button>
      <p className={usersListClass.join(" ")}>
        Users count is {props.usersCount}
      </p>
    </div>
  );
};

export default cockpit;
