import React from 'react'
import {Link} from 'react-router-dom'
import {getBlogPosts} from '../../lib/blogService.jsx'


const BlogLink = (blog) => (
    <div className="blogLink">
        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </div>
);

BlogLink.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
};


class BlogListPage extends React.Component {

    state = {
        blogs: []
    };

    componentDidMount() {
        getBlogPosts()
            .then(blogs => this.setState({
                ...this.state,
                blogs: blogs
            }))
    }

    render() {
        return (
            <div className="BlogListPage">
                <div className="blogList">
                    {this.state.blogs.map((blog) => (
                        <BlogLink key={blog.id} {...blog}/>
                    ))}
                </div>
            </div>
        )
    }
}



export {BlogListPage}
