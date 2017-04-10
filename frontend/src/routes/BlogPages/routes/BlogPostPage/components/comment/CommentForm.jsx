import React from 'react'

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="id"
                onChange={props.handleInputChange}
                value={props.currentComment.id}
            />
            <input type="text" name="author"
                onChange={props.handleInputChange}
                value={props.currentComment.author}
            />
            <input type="text" name="content"
                onChange={props.handleInputChange}
                value={props.currentComment.content}
            />
            <button onClick={props.onSubmit}>button</button>
        </form>
    )
};

export {CommentForm}
