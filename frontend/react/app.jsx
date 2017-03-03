import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import {LandingPage} from './pages/landing/index.jsx';
import {DashboardPage} from './pages/dashboard/index.jsx';
import Navigation from "./components/navigation/index.jsx";

import auth from './managers/auth.jsx';

require('./pages/styles/styles.scss');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {};
    }

    handleLinkClick(event) {
        let url = event.currentTarget.getAttribute('href');

        switch(url) {
            case '#':
                event.preventDefault();
                this.setState({});
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        console.log(auth.loggedIn())
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div>sdfdsfds</div>
                {/*<div id="app">*/}
                    <Route path='/' component={LandingPage} />
                    <Route path='/dashboard/' component={DashboardPage} onEnter={auth.requireAuth} />
                {/*// </div>*/}
            </Router>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={LandingPage}>
            <Route path='dashboard' component={DashboardPage}/>
        </Route>
        {/*<Route path='*' component={NoMatch}/>*/}
  </Router>,
  document.getElementById('reactEntry')
);
