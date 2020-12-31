import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log("[Header] - constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Header] getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Header] shouldComponentUpdate");

    // This hook can be used to improve the performance by returning false
    // when there are no changes in the dependent data, so that render 
    // and reset of the lifecycle hooks can be avoided
    if (nextProps.moviesCount !== this.props.moviesCount) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("[Header] render");
    return (
      <div>
        <h2>Movies Library</h2>
        <p>Number movies available {this.props.moviesCount}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Header] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Header] componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[Header] componentDidMount");
  }

  componentDidCatch() {
    console.log("[Header] componentDidCatch");
  }

  componentWillUnmount() {
    console.log("[Header] componentWillUnmount");
  }
}

export default Header;
