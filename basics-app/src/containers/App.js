import React, { Component } from "react";
import "./App.css";
import Users from "../components/Users/Users";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
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
          users={this.state.users}
          showUsers={this.state.showUsers}
          toggleButton={this.toggleUsersHandler}
        ></Cockpit>

        <div>
          {this.state.showUsers && (
            <Users
              users={this.state.users}
              deleteUser={this.deleteUserHandler}
              changeName={this.changeNameHandler}
            ></Users>
          )}
        </div>
      </div>
    );
  }
}

export default App;
