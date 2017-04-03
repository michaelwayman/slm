import React from 'react'


const Comment = (props) => (
    <div className="Comment">
        Comment
        <h2>{props.comment.id}</h2>
        <h3>{props.comment.name}</h3>
        <p>{props.comment.content}</p>
    </div>
);

export {Comment}