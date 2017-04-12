import React from 'react';
import { Navigation, Footer } from '../components/index.jsx';
import { Route } from 'react-router-dom'
import './styles.css';
import { BlogListPage, BlogPostPage } from './routes/index.jsx';


class BlogPages extends React.Component {

    render() {
        return (
            <section id="blogPage">
                <Navigation/>
                    <Route exact path="/blog" component={BlogListPage}/>
                    <Route path="/blog/:id" component={({match}) => (<BlogPostPage id={match.params.id}/>)}/>
                <Footer/>
            </section>
        )
    }
}

export {BlogPages}
