import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

// import NewPost from '../NewPost/NewPost';
const LazyNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="Blogs">
                <header>
                    <nav >
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-active-class"
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="my-active-class"
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?search=post'
                                    }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts></Posts> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Switch>
                    <Route path="/" exact component={Posts}></Route>
                    {/* <Route path="/new-post" exact component={NewPost}></Route> */}
                    <Route path="/new-post" exact component={LazyNewPost}></Route>
                    <Route path="/:id" exact component={FullPost}></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;