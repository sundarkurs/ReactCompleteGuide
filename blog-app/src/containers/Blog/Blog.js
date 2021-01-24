import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import { Route } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="Blogs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts></Posts> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" exact component={NewPost}></Route>
            </div>
        );
    }
}

export default Blog;