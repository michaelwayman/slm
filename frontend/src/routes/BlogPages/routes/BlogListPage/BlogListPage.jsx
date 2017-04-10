import React from 'react'
import {Link} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getBlogPosts } from '../../lib/blogService.jsx'
import logger from 'redux-logger'


const LoadingSpinner = () => (
    <i className="fa fa-spinner fa-spin fa-5x"></i>
);


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


const BlogLink = ({blog}) => (
    <li style={{'list-style': 'none'}}>
        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </li>
);


class BlogList extends React.Component {

    componentDidMount() {
        getBlogPosts()
            .then(blogs => this.props.dispatch({
                type: 'LOAD_BLOGS',
                blogs
            }))
    }


    render() {
        const blogList = this.props.loading
            ? <LoadingSpinner/>
            : this.props.blogs.map(blog => <BlogLink key={blog.id} blog={blog}/>);
        return (
            <section className="blogList row padTop-96 padBottom-96 pageWidth textCenter">
                {blogList}
            </section>
        )
    }

}

const mapStateToBlogListProps = (state) => {
    return {
        blogs: state.blogs,
        loading: state.loading
    }
};


const VisibleBlogList = connect(
    mapStateToBlogListProps,
    null
)(BlogList);


const store = createStore(
  blogPageReducer,
  applyMiddleware(logger)
);

class BlogListPage extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                <div className="row padTop-96 pageWidth textCenter">
                    <h1>Blog</h1>
                </div>
                <div className="row padTop-96 padBottom-96 pageWidth text-center">
                    <VisibleBlogList/>
                </div>
                </div>
            </Provider>
        );
    }
}



export {BlogListPage}
