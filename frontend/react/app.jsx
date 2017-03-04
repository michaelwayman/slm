import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import HomePage from './routes/home/index.jsx';
import Dashboard from './routes/dashboard/index.jsx';
import LoginPage from './routes/login/index.jsx';

import Navigation from "./routes/components/navigation/index.jsx";

import auth from './managers/auth.jsx';

import './styles.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
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
            <IndexRoute component={HomePage}/>
            <Route path='/dashboard' component={Dashboard.Dashboard} onEnter={auth.requireAuth}>
                <IndexRoute component={Dashboard.OverviewPage}/>
                <Route path='/dashboard/licenses' component={Dashboard.LicensesPage} />
                <Route path='/dashboard/account' component={Dashboard.AccountPage} />
                <Route path='/dashboard/users' component={Dashboard.UsersPage} />
                <Route path='/dashboard/groups' component={Dashboard.GroupsPage} />
            </Route>
            <Route path='/login' component={LoginPage} />
        </Route>
        {/*<Route path='*' component={NoMatch}/>*/}
  </Router>,
  document.getElementById('reactEntry')
);
