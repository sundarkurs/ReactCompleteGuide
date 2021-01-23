import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    };

    componentDidUpdate() {
        console.log("[FullPost] componentDidUpdate")
        if (this.props.id) {
            if (!this.state.post || (this.state.post.id !== this.props.id)) {
                axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
                    .then(response => {
                        this.setState({ post: response.data })
                    })
            }

        }

    }

    deletePostHandler = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
            .then(response => {
                console.log(response);
            })
    };

    render() {
        console.log("[FullPost] render")
        let element = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.id) {
            element = <div style={{ textAlign: 'center' }}>Loading....</div>;
        }

        if (this.state.post !== null) {
            element = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>Content</p>
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