import axios from '../../axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    };

    componentDidMount() {
        console.log(this.props)
        if (this.props.match.params.id) {
            if (!this.state.post || (this.state.post.id !== this.props.match.params.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        this.setState({ post: response.data })
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
    };

    render() {
        console.log("[FullPost] render")
        let element = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.match.params.id) {
            element = <div style={{ textAlign: 'center' }}>Loading....</div>;
        }

        if (this.state.post !== null) {
            element = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return element;
    }
}

export default FullPost;