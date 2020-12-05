import React, { Component } from "react";
import "./App.css";
import User from "./User/User";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Sundar", age: 36 },
      { id: 2, name: "Diya", age: 5 },
      { id: 3, name: "Shwetha", age: 30 },
    ],
    showPersons: false,
  };

  showUsersHandler = () => {
    this.setState({ showPersons: true });
  };

  hideUsersHandler = () => {
    this.setState({ showPersons: false });
  };

  deleteUserHandler = () => {
    console.log("Delete");
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.showUsersHandler}>Show Users</button>
          <button onClick={this.hideUsersHandler}>Hide Users</button>
        </div>
        <div>
          {this.state.showPersons ? (
            <div>
              <User
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                deleteUser={this.deleteUserHandler}
              >
                On annual vacation
              </User>

              <User
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
              ></User>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
