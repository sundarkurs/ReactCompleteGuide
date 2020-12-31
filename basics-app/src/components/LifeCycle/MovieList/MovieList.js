import { Component, React } from "react";
import Movie from "../Movie/Movie";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log("[MovieList] - constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[MovieList] getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[MovieList] shouldComponentUpdate");

    return true;
  }

  render() {
    console.log("[MovieList] render");
    return this.props.movies.map((movie, index) => {
      return (
        <Movie
          movie={movie}
          index={index}
          key={index}
          changeDesc={this.props.changeDesc}
        ></Movie>
      );
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[MovieList] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[MovieList] componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[MovieList] componentDidMount");
  }

  componentDidCatch() {
    console.log("[MovieList] componentDidCatch");
  }

  componentWillUnmount() {
    console.log("[MovieList] componentWillUnmount");
  }
}

export default MovieList;
