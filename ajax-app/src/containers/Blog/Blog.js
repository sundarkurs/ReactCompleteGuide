import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: "Sundar" };
                });

                this.setState({ posts: updatedPosts });
                console.log(updatedPosts)
            })

    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const postItems = this.state.posts.map((post, index) => {
            return <Post key={post.id} post={post} clicked={() => this.postSelectedHandler(post.id)}></Post>
        });

        return (
            <div>
                <section className="Posts">
                    {postItems}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;