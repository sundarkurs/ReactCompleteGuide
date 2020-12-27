import React, { Component } from "react";
import "./App.css";
import Users from "../components/Users/Users";

class App extends Component {
  render() {
    console.log("[App] render");
    return (
      <div>
        <Users></Users>
      </div>
    );
  }
}

export default App;
