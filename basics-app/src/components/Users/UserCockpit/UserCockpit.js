import React from "react";

const userCockpit = (props) => {
  // Inline styling
  const showButtonStyle = {
    backgroundColor: "pink",
    border: "1px solid blue",
  };

  const hideButtonStyle = {
    backgroundColor: "grey",
    border: "1px solid blue",
  };

  // Building dynamic classes
  const usersListClass = [];
  if (props.users.length <= 2) {
    usersListClass.push("red");
  }

  if (props.users.length <= 1) {
    usersListClass.push("bold");
  }

  return (
    <div>
      <button
        style={props.showUsers ? hideButtonStyle : showButtonStyle}
        onClick={props.toggleButton}
      >
        {props.showUsers ? "Hide Users" : "Show Users"}
      </button>
      <p className={usersListClass.join(" ")}>List of users.</p>
    </div>
  );
};

export default userCockpit;
