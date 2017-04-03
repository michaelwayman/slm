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


import './styles/styles.css'


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
                </div>
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App;
