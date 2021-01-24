import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    console.log(props)

    return (
        <article className="Post" onClick={props.clicked} >
            <h1>{props.post.title}</h1>
            <div className="Info">
                <div className="Author">{props.post.author}</div>
            </div>
        </article >
    )
};

export default withRouter(post);