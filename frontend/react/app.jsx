import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {
    HomePage,
    Dashboard,
    LoginPage,
    RegistrationPage
} from './routes/index.jsx';

import rootReducer from './reducers.jsx';

import './styles/styles.scss';

class App extends React.Component {

    render() {
        return (
            <div id="app">
                { this.props.children }
            </div>
        )
    }
}

function loggedIn() {
    return !!localStorage.token
}
function requireAuthorization(nextState, replace) {
    if (!loggedIn()) replace({pathname:'/login', state: {nextPathname: '/dashboard'}})
}
function authorizedRedirect(nextState, replace) {
    if (loggedIn()) replace({pathname:'/dashboard', state: {nextPathname: '/'}})
}

const logger = createLogger({collapsed: true});  // logs redux actions if *last* in middleware
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage} onEnter={authorizedRedirect}/>
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegistrationPage} />
                <Route path='/dashboard' component={Dashboard.Dashboard} onEnter={requireAuthorization}>
                    <IndexRoute component={Dashboard.OverviewPage}/>
                    <Route path='/dashboard/licenses' component={Dashboard.LicensesPage} />
                    <Route path='/dashboard/account' component={Dashboard.AccountPage} />
                    <Route path='/dashboard/users' component={Dashboard.UsersPage} />
                    <Route path='/dashboard/groups' component={Dashboard.GroupsPage} />
                </Route>
            </Route>
            {/*<Route path='*' component={NoMatch}/>*/}
        </Router>
    </Provider>,
  document.getElementById('reactEntry')
);
