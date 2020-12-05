import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="User">
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>

      {props.children ? <div>More Info: {props.children}</div> : null}

      <button onClick={props.deleteUser}>Delete</button>
    </div>
  );
};

export default User;
