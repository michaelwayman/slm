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
    Registration,
    PricingPage,
    FeaturesPage,
    ContactPage,
} from './routes/index.jsx';

import rootReducer from './reducers/index.jsx';

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


const logger = createLogger({collapsed: true});  // logs redux actions
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={Registration.Registration}>
                    <IndexRoute component={Registration.CreateUserPage}/>
                    <Route path='/register/plan' component={Registration.ChoosePlanPage} />
                    <Route path='/register/experience' component={Registration.TailorExperiencePage} />
                </Route>
                <Route path='/pricing' component={PricingPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/features' component={FeaturesPage} />
                <Route path='/dashboard' component={Dashboard.Dashboard} >
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
