import React, { Component } from "react";
import "./App.css";
import User from "./User/User";

class App extends Component {
  state = {
    users: [
      { id: 1, name: "Sundar", age: 36 },
      { id: 2, name: "Diya", age: 5 },
      { id: 3, name: "Shwetha", age: 30 },
    ],
    showUsers: false,
  };

  showUsersHandler = () => {
    this.setState({ showUsers: true });
  };

  hideUsersHandler = () => {
    this.setState({ showUsers: false });
  };

  deleteUserHandler = () => {
    console.log("Delete");
  };

  changeNameHandler = () => {
    console.log("Changed");
  };

  render() {
    const buttonStyle = {
      backgroundColor: "pink",
      border: "1px solid blue",
    };

    let users = null;

    if (this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map((user) => {
            return (
              <User
                name={user.name}
                age={user.age}
                deleteUser={this.deleteUserHandler}
                changeName={this.changeNameHandler}
              >
                On annual vacation
              </User>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <button style={buttonStyle} onClick={this.showUsersHandler}>
            Show Users
          </button>
          <button onClick={this.hideUsersHandler}>Hide Users</button>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default App;
