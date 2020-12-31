import { Component, React } from "react";
import MovieList from "./MovieList/MovieList";
import Header from "./Header/Header";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          id: 1,
          name: "Toy Story",
          rating: 4,
          description: "The Toy Story movie.",
        },
        {
          id: 2,
          name: "Finding Dory",
          rating: 5,
          description: "The Finding Dory movie.",
        },
        {
          id: 3,
          name: "Finding Nemo",
          rating: 3,
          description: "The Finding Nemo movie.",
        },
      ],
    };

    console.log("[LifeCycle] - constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[LifeCycle] getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[LifeCycle] shouldComponentUpdate");
    return true;
  }

  changeDescriptionHandler = (event, id) => {
    const movieIndex = this.state.movies.findIndex((u) => {
      return u.id === id;
    });

    const movie = { ...this.state.movies[movieIndex] };
    movie.description = event.target.value;

    const movies = [...this.state.movies];
    movies[movieIndex] = movie;

    this.setState({ movies: movies });

    console.log("Changed");
    //this.setState({body: event.target.value});
  };

  render() {
    console.log("[LifeCycle] - render");
    return (
      <div>
        <Header moviesCount={this.state.movies.length}></Header>
        <MovieList
          movies={this.state.movies}
          changeDesc={this.changeDescriptionHandler}
        ></MovieList>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[LifeCycle] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[LifeCycle] componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[LifeCycle] componentDidMount");
  }

  componentDidCatch() {
    console.log("[LifeCycle] componentDidCatch");
  }

  componentWillUnmount() {
    console.log("[LifeCycle] componentWillUnmount");
  }
}

export default LifeCycle;
