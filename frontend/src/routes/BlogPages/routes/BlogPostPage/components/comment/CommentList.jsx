import React from 'react'
import {Comment} from './Comment.jsx'


const CommentList = (props) => (
    <div className="CommentList">
        <ul>
            {props.comments.map((comment) =>
                <Comment key={comment.id} comment={comment}/>
            )}
        </ul>
    </div>
);

export {CommentList}