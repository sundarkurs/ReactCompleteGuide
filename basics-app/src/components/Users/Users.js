import React, { Component } from "react";
import UserList from "../Users/UserList/UserList";
import UserCockpit from "../Users/UserCockpit/UserCockpit";

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  state = {
    users: [
      { id: 1, name: "Sundar", age: 36 },
      { id: 2, name: "Diya", age: 5 },
      { id: 3, name: "Shwetha", age: 30 },
    ],
    showUsers: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App] componentDidUpdate");
    console.log(snapshot);
  }

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
    console.log("[App] render");
    return (
      <div className="App">
        <UserCockpit
          users={this.state.users}
          showUsers={this.state.showUsers}
          toggleButton={this.toggleUsersHandler}
        ></UserCockpit>

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
