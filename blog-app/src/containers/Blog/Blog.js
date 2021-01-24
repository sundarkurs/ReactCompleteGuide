import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import { Route, Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <header>
                    <nav className="Blogs">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?search=post'
                                }}>New Post</Link>
                            </li>
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