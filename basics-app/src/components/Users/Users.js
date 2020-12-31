import React, { Component } from "react";
import UserList from "../Users/UserList/UserList";
import Cockpit from "./Cockpit/Cockpit";

class Users extends Component {

  state = {
    users: [
      { id: 1, name: "Sundar", age: 36 },
      { id: 2, name: "Diya", age: 5 },
      { id: 3, name: "Shwetha", age: 30 },
    ],
    showUsers: false,
  };

  toggleUsersHandler = () => {
    this.setState({ showUsers: !this.state.showUsers });
  };

  deleteUserHandler = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users: users });
    console.log("Deleted");
  };

  changeNameHandler = (event, id) => {
    const userIndex = this.state.users.findIndex((u) => {
      return u.id === id;
    });

    const user = { ...this.state.users[userIndex] };
    user.name = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({ users: users });

    console.log("Changed");
  };

  render() {
    return (
      <div className="App">
        <Cockpit
          usersCount={this.state.users.length}
          showUsers={this.state.showUsers}
          toggleButton={this.toggleUsersHandler}
        ></Cockpit>

        <div>
          {this.state.showUsers && (
            <UserList
              users={this.state.users}
              deleteUser={this.deleteUserHandler}
              changeName={this.changeNameHandler}
            ></UserList>
          )}
        </div>
      </div>
    );
  }
}

export default Users;
