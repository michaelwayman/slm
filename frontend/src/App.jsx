import React from 'react';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {
    AboutPage,
    BlogPages,
    ContactPage,
    FeaturesPage,
    HomePage,
    LoginPage,
    ProductDetailPage
} from './routes/index.jsx'

import {Registration} from './routes/Registration/index.jsx'

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
                    <Route path="/" exact component={HomePage}/>
                    <Route path='/about' component={AboutPage} />
                    <Route path="/blog" component={BlogPages} />
                    <Route path='/register' component={Registration}/>
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/features' component={FeaturesPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/details' component={ProductDetailPage} />
                </div>
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App;
