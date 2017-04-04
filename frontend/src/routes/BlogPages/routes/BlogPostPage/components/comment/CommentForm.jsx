import React from 'react'

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="id"
                onChange={props.handleInputChange}
                value={props.currentComment.id}
            />
            <input type="text" name="name"
                onChange={props.handleInputChange}
                value={props.currentComment.name}
            />
            <input type="text" name="content"
                onChange={props.handleInputChange}
                value={props.currentComment.content}
            />
        </form>
    )
};

export {CommentForm}
