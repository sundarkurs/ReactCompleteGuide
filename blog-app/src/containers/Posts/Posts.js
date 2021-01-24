import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Posts.css';
import axios from '../../axios';
import { Link } from 'react-router-dom';


class Posts extends Component {
    state = {
        posts: [],
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    componentDidMount() {
        console.log(this.props);

        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: "Sundar" };
                });

                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                //this.setState({ error: true })
            })
    }

    render() {
        let postItems = <p style={{ textAlign: 'center' }}>Something went wrong....</p>;

        if (!this.state.error) {
            postItems = this.state.posts.map((post, index) => {
                return (
                    <Link key={post.id} to={'/' + post.id} >
                        <Post
                            post={post}
                            clicked={() => this.postSelectedHandler(post.id)}>
                        </Post>
                    </Link>);
            });
        }

        return (
            <section className="Posts">
                {postItems}
            </section>
        );

    }
}

export default Posts;