import { combineReducers } from 'redux';

import {pageReducer} from './page.jsx';
import {userReducer} from './user.jsx';


import {LOGOUT_USER} from '../actions/index.jsx';


const reducers = combineReducers({
    page: pageReducer,
    user: userReducer,
});


const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = undefined;  // Return state back to initial on logout
    }
    return reducers(state, action)
};


export default rootReducer;
