import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import {LandingPage} from './pages/landing/index.jsx';
import {DashboardPage} from './pages/dashboard/index.jsx';
import Navigation from "./components/navigation/index.jsx";

import auth from './managers/auth.jsx';

require('./pages/styles/styles.scss');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        // console.log(IndexRoute)
    }

    componentDidMount() {
        console.log(auth.loggedIn())
    }

    render() {
        return (
            <div id="app">
                { this.props.children }
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={LandingPage}/>
            <Route path='/dashboard' component={DashboardPage}/>
        </Route>
        {/*<Route path='*' component={NoMatch}/>*/}
  </Router>,
  document.getElementById('reactEntry')
);
