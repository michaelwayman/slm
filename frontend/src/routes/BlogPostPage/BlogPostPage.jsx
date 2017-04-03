import React from 'react'
import {BlogPost} from './components/post/index.jsx'
import {CommentList, CommentForm} from './components/comment/index.jsx'
import {getCommentsByPostId, getPostById} from '../../lib/blogService'
import {Navigation} from "../components/Navigation";
import {Footer} from '../components/Footer'


class BlogPostPage extends React.Component {

    state = {
        post: {},
        comments: [],
        currentComment: {
            id: 1,
            name: "",
            date: "",
            content: ""
        }
    };

    componentDidMount()  {
        getPostById(this.props.id)
            .then(post => this.setState({
                ...this.state,
                post: post
            }));
        getCommentsByPostId(this.state.post.id)
            .then(comments => this.setState({
                ...this.state,
                comments: comments
            }))
    };

    handleInputChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({
            currentComment: {
                ...this.state.currentComment,
                [name]: value
            }
        });

    };

    handleCommentSubmit = (evt) => {
        evt.preventDefault()
    };

    render() {
        return (
            <section className="blogPostPage">
            <Navigation/>
                <BlogPost post={this.state.post}/>
                <CommentForm handleInputChange={this.handleInputChange}
                             currentComment={this.state.currentComment}
                             handleSubmit={this.handleCommentSubmit}
                />
                <CommentList comments={this.state.comments}/>
            <Footer/>
            </section>
        )
    }
}

export {BlogPostPage}
