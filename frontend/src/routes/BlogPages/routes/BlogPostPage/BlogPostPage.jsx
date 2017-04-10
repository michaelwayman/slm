import React from 'react'
import {BlogPost} from './components/post/index.jsx'
import {CommentList, CommentForm} from './components/comment/index.jsx'
import {getCommentsByPostId, getPostById, postCommentToBlogByBlogId} from '../../lib/blogService.jsx'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import './styles.css'


const LoadingSpinner = () => (
    <i className="fa fa-spinner fa-spin fa-5x"></i>
);

const post = (state={}, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return {
                ...action.post
            };
        default:
            return state;
    }
};

const comments = (state=[], action) => {
    switch (action.type) {
        case 'LOAD_COMMENTS':
            return [
                ...action.comments
            ];
        default:
            return state;
    }
};


const loading = (state, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return {
                ...state,
                post: false
            };
        case 'LOAD_COMMENTS':
            return {
                ...state,
                comments: false
            };
        case 'LOADING_COMMENTS':
            return {
                ...state,
                comments: true
            };
        case 'INITIAL_LOAD':
            return {
                post: true,
                comments: true
            };
        default:
            return {
                post: true,
                comments: true
            }
    }
};

const postPageReducer = combineReducers({
    post,
    comments,
    loading
});

const store = createStore(postPageReducer,
                          applyMiddleware(logger));


class BlogPostPageContainer extends React.Component {

    constructor(props){
        super(props);
        props.dispatch({
           type: 'INITIAL_LOAD'
        });
        this.state = {
            currentComment: {
                id: 1, author: "", date: "", content: ""
            }
        }
    }


    componentDidMount()  {
        getPostById(this.props.id)
            .then(post => {
                this.props.dispatch({
                    type: 'LOAD_POST',
                    post
                })
            });

        getCommentsByPostId(this.props.id)
            .then(comments => {
                console.log(comments);
                this.props.dispatch({
                    type: 'LOAD_COMMENTS',
                    comments
                })
            })
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

    postComment = (postId, comment) => {
        this.props.dispatch({
            type: 'LOADING_COMMENTS'
        });
        postCommentToBlogByBlogId(postId, comment)
            .then(getCommentsByPostId(this.props.id)
                .then(comments => {
                    this.props.dispatch({
                        type: 'LOAD_COMMENTS',
                        comments: comments
                    })
                }));
    };


    render() {
        let postContent = this.props.loading.post ? <LoadingSpinner/> : <BlogPost post={this.props.post}/>;
        let commentContent = this.props.loading.comments ? <LoadingSpinner/> : <CommentList comments={this.props.comments}/>;
        let commentForm = this.props.loading.comments
                            ? <div></div>
                            : <CommentForm handleInputChange={this.handleInputChange}
                                currentComment={this.state.currentComment}
                                onSubmit={(evt) => {
                                    evt.preventDefault();
                                    this.postComment(this.props.id, this.state.currentComment);
                                }}/>;
        return (
            <div>
                <section className="blogPost row padTop-96 padBottom-96 pageWidth textCenter">
                    {postContent}
                </section>
                <section className="blogCommentForm row padTop-96 pageWidth textCenter">
                    {commentForm}
                </section>
                <section className="commentList row padTop-96 padBottom-96 pageWidth textCenter">
                    {commentContent}
                </section>
            </div>
        )
    }
}
const mapStateToBlogPostProps = (state) => {
    return {
        post: state.post,
        comments: state.comments,
        loading: state.loading
    }
};


const BlogPostPage = connect(
    mapStateToBlogPostProps,
    null
)(BlogPostPageContainer);


class BlogApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BlogPostPage id={this.props.id}/>
            </Provider>
        )
    }
}


export {BlogPostPage, BlogApp}
