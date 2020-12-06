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
    // Inline styling
    const showButtonStyle = {
      backgroundColor: "pink",
      border: "1px solid blue",
    };

    const hideButtonStyle = {
      backgroundColor: "grey",
      border: "1px solid blue",
    };

    // Pre
    let users = null;

    if (this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map((user, index) => {
            return (
              <User
                key={user.id}
                name={user.name}
                age={user.age}
                deleteUser={() => this.deleteUserHandler(index)}
                changeName={(event) => this.changeNameHandler(event, user.id)}
              >
                {index === 0 ? "On annual vacation" : ""}
              </User>
            );
          })}
        </div>
      );
    }

    // Building dynamic classes
    const usersListClass = [];
    if (this.state.users.length <= 2) {
      usersListClass.push("red");
    }

    if (this.state.users.length <= 1) {
      usersListClass.push("bold");
    }

    // The main return of the component
    return (
      <div className="App">
        <div>
          <button
            style={this.state.showUsers ? hideButtonStyle : showButtonStyle}
            onClick={this.toggleUsersHandler}
          >
            {this.state.showUsers ? "Hide Users" : "Show Users"}
          </button>
          <p className={usersListClass.join(" ")}>List of users.</p>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default App;
