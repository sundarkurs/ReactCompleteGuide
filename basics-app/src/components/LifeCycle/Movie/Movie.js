import { Component, React } from "react";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false,
    };

    console.log("[Movie] - constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Movie] getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Movie] shouldComponentUpdate");

    return true;
  }

  render() {
    console.log("[Movie] render");
    return (
      <div className="Movie">
        <h5>
          {this.props.index + 1}. {this.props.movie.name} (
          {this.props.movie.rating}*)
        </h5>
        {!this.state.isEditable ? <p>{this.props.movie.description}</p> : ""}
        {this.state.isEditable ? (
          <p>
            <textarea
              value={this.props.movie.description}
              onChange={(event) =>
                this.props.changeDesc(event, this.props.movie.id)
              }
            />
          </p>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            this.setState({ isEditable: !this.state.isEditable });
          }}
        >
          {this.state.isEditable ? "Close" : "Edit"}
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Movie] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Movie] componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[Movie] componentDidMount");
  }

  componentDidCatch() {
    console.log("[Movie] componentDidCatch");
  }

  componentWillUnmount() {
    console.log("[Movie] componentWillUnmount");
  }
}

export default Movie;
