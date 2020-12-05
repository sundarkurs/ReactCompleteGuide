import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="User">
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default User;
