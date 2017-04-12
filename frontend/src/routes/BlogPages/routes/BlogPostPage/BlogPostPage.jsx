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


/*** Reducers ***/

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


/*** Store ***/

const store = createStore(postPageReducer,
                          applyMiddleware(logger));


/*** Action Creators ***/

const postComment = (dispatch, postId, comment) => {
    dispatch({
        type: 'LOADING_COMMENTS'
    });
    postCommentToBlogByBlogId(postId, comment)
        .then(getCommentsByPostId(postId)
            .then(comments => {
                dispatch({
                    type: 'LOAD_COMMENTS',
                    comments: comments
                })
            }));
};

const getBlogPost = (dispatch, id) => {
    getPostById(id)
        .then(post => {
            dispatch({
                type: 'LOAD_POST',
                post
            })
        });
};

const getComments = (dispatch, id) => {
    getCommentsByPostId(id)
        .then(comments => {
            dispatch({
                type: 'LOAD_COMMENTS',
                comments
            })
        })
};


/*** Container ***/

class BlogPostPageContainer extends React.Component {

    constructor(props){
        super(props);
        this.props.initialLoad();
        this.state = {
            currentComment: {id: 1, author: "", date: "", content: ""}
        }
    }

    componentDidMount()  {
        this.props.getBlogPost(this.props.id);
        this.props.getComments(this.props.id);

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
        evt.preventDefault();
        this.props.postComment(this.props.id, this.state.currentComment)
    };


    render() {
        let postContent = this.props.loading.post ? <LoadingSpinner/> : <BlogPost post={this.props.post}/>;
        let commentContent = this.props.loading.comments ? <LoadingSpinner/> : <CommentList comments={this.props.comments}/>;
        let commentForm = !this.props.loading.comments && <CommentForm handleInputChange={this.handleInputChange}
                                                            currentComment={this.state.currentComment}
                                                            onSubmit={evt => this.handleCommentSubmit(evt)}/>;
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


/*** Connect Functions ***/

const mapDispatchToBlogPostProps = (dispatch) =>{
    return {
        initialLoad: () => dispatch({type: 'INITIAL_LOAD'}),
        postComment: (postId, comment) => postComment(dispatch, postId, comment),
        getBlogPost: (id) => getBlogPost(dispatch, id),
        getComments: (id) => getComments(dispatch, id)
    }
};


const mapStateToBlogPostProps = (state) => {
    return {
        post: state.post,
        comments: state.comments,
        loading: state.loading
    }
};

const BlogPostApp = connect(
    mapStateToBlogPostProps,
    mapDispatchToBlogPostProps
)(BlogPostPageContainer);


/*** Page ***/

class BlogPostPage extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BlogPostApp id={this.props.id}/>
            </Provider>
        )
    }
}


export {BlogPostPage}
