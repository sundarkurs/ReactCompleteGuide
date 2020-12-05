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

  deleteUserHandler = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users: users });
    console.log("Deleted");
  };

  changeNameHandler = () => {
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
                name={user.name}
                age={user.age}
                deleteUser={() => this.deleteUserHandler(index)}
                changeName={this.changeNameHandler}
              >
                On annual vacation
              </User>
            );
          })}
        </div>
      );
    }

    // The main return of the component
    return (
      <div className="App">
        <div>
          <button style={showButtonStyle} onClick={this.showUsersHandler}>
            Show Users
          </button>
          <button style={hideButtonStyle} onClick={this.hideUsersHandler}>
            Hide Users
          </button>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default App;
