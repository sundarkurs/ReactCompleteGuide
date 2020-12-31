import React, { Component } from "react";
import "./App.css";
import Users from "../components/Users/Users";
import LifeCycle from "../components/LifeCycle/LifeCycle";

class App extends Component {
  render() {
    console.log("[App] render");
    return (
      <div>
        {/* <Users></Users> */}
        <LifeCycle></LifeCycle>
      </div>
    );
  }
}

export default App;
