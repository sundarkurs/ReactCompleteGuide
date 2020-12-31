import React from "react";
import User from "../User/User";

const userList = (props) => {
  return props.users.map((user, index) => {
    return (
      <User
        user={user}
        key={user.id}
        deleteUser={() => props.deleteUser(index)}
        changeName={props.changeName}
      >
        {index === 0 ? "On annual vacation" : ""}
      </User>
    );
  });
};

export default userList;
