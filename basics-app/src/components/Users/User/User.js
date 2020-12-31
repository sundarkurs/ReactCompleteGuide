import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="User">
      <h1>{props.user.name}</h1>
      <p>
        Name:
        <input
          onChange={(event) => props.changeName(event, props.user.id)}
          type="textbox"
          value={props.user.name}
        ></input>
      </p>
      <p>Age: {props.user.age}</p>

      {props.children ? <div>More Info: {props.children}</div> : null}

      <button onClick={props.deleteUser}>Delete</button>
    </div>
  );
};

export default User;
