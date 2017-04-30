import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import { Navigation, Footer } from '../components/index.jsx';

import {LandingPage} from './routes/index.jsx';

// import './style.scss';


class Discover extends React.Component {
    render() {
        return (
            <section id="discoverPage">
                <Navigation/>
                <Route exact path='/discover' component={LandingPage}/>
                <Footer/>
            </section>
        )
    }
}


export default connect(
    (state) => {
        return {page: state.page, user: state.user, account: state.account}
    }
)(Discover);
