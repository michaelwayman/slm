import React from 'react'
import {Link} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getBlogPosts } from '../../lib/blogService.jsx'
import logger from 'redux-logger'
import {LoadingSpinner} from '../../../components/Loading/index.jsx'


/*** Reducers ***/

const blogs = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_BLOGS':
            return action.blogs;
        default:
            return state
    }
};

const loading = (state={}, action) => {
    switch(action.type) {
        case 'LOAD_BLOGS':
            return false;
        default:
            return true
    }
};

const blogPageReducer = combineReducers({
    blogs,
    loading
});


/*** Store ***/

const store = createStore(
  blogPageReducer,
  applyMiddleware(logger)
);


/*** Sub components ***/

const BlogLink = ({blog}) => (
    <li style={{listStyle: 'none'}}>
        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </li>
);


/*** Container ***/

class BlogList extends React.Component {

    componentDidMount() {
        this.props.loadBlogs()
    }


    render() {
        const blogList = this.props.loading
            ? <LoadingSpinner/>
            : this.props.blogs.map(blog => <BlogLink key={blog.id} blog={blog}/>);
        return (
            <section className="blogListPage">
                <div className="row padTop-96 pageWidth textCenter">
                    <h1>Blog</h1>
                </div>
                <div className="row padTop-96 padBottom-96 pageWidth textCenter">
                    {blogList}
                </div>
            </section>
        )
    }

}


/*** Connect Functions ***/

const mapStateToBlogListProps = (state) => ({
    blogs: state.blogs,
    loading: state.loading
});


const mapDispatchToBlogListProps = (dispatch) => {
    return {
        loadBlogs: () => {
            getBlogPosts()
                .then(blogs =>
                    dispatch({
                        type: 'LOAD_BLOGS',
                        blogs
                    }))
        }
    }
};

const VisibleBlogList = connect(
    mapStateToBlogListProps,
    mapDispatchToBlogListProps
)(BlogList);


/*** Page ***/

class BlogListPage extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <VisibleBlogList/>
            </Provider>
        );
    }
}



export {BlogListPage}
