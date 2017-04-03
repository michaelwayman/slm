import React from 'react';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {
    AboutPage,
    BlogPostPage,
    BlogListPage,
    ContactPage,
    FeaturesPage,
    HomePage,
    LoginPage,
    PricingPage,
    Registration
} from './routes/index.jsx'



import rootReducer from './reducers/index.jsx';


import {
    BrowserRouter,
    Route,
} from 'react-router-dom'


import './styles/styles.scss'


const logger = createLogger({collapsed: true});  // logs redux actions
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename="/">
                <div className="appRoutes">
                    <Route path="/" exact={true} component={HomePage}/>
                    <Route path='/about' component={AboutPage} />
                    <Route path="/blog" exact={true} component={BlogListPage}/>
                    <Route path="/blog/:postId" component={({match}) => (<BlogPostPage id={match.params.postId}/>)}/>   {/* Could get blog before rendering*/}
                    <Route path='/register' component={Registration.CreateUserPage}/>
                    <Route path='/register/plan' component={Registration.ChoosePlanPage} />
                    <Route path='/register/experience' component={Registration.TailorExperiencePage} />
                    <Route path='/pricing' component={PricingPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/features' component={FeaturesPage} />
                    <Route path='/login' component={LoginPage} />
                    {/*<Route path='/register' component={RegistrationPage} />*/}
                </div>
                </BrowserRouter>
            </Provider>

        )
    }
}

// ReactDOM.render(
//     <Provider store={store}>
//         {/*<Router history={hashHistory}>*/}
//             {/*<Route path='/' component={App}>*/}
//                 {/*<IndexRoute component={HomePage} onEnter={authorizedRedirect}/>*/}
//                 {/*<Route path='/login' component={LoginPage} />*/}
//                 {/*<Route path='/register' component={RegistrationPage} />*/}
//                 {/*<Route path='/blog' component={BlogPage} />*/}
//                 {/*<Route path='/pricing' component={PricingPage} />*/}
//                 {/*<Route path='/contact' component={ContactPage} />*/}
//                 {/*<Route path='/features' component={FeaturesPage} />*/}
//                 {/*<Route path='/dashboard' component={Dashboard.Dashboard} onEnter={requireAuthorization}>*/}
//                     {/*<IndexRoute component={Dashboard.OverviewPage}/>*/}
//                     {/*<Route path='/dashboard/licenses' component={Dashboard.LicensesPage} />*/}
//                     {/*<Route path='/dashboard/account' component={Dashboard.AccountPage} />*/}
//                     {/*<Route path='/dashboard/users' component={Dashboard.UsersPage} />*/}
//                     {/*<Route path='/dashboard/groups' component={Dashboard.GroupsPage} />*/}
//                 {/*</Route>*/}
//             {/*</Route>*/}
//             {/*/!*<Route path='*' component={NoMatch}/>*!/*/}
//         {/*</Router>*/}
//     </Provider>,
//   document.getElementById('reactEntry')
// );

export default App;
