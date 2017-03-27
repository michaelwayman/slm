import { combineReducers } from 'redux';

import {
    SET_PAGE_STATE,
    USER_LOGOUT
} from './actions.jsx';


function pageReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE_STATE:
            return Object.assign({}, state, action.newState);
            break;
        default:
            return state;
    }
}


function userReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE_STATE:
            return Object.assign({}, state, action.newState);
            break;
        default:
            return state;
    }
}


function accountReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE_STATE:
            return Object.assign({}, state, action.newState);
            break;
        default:
            return state;
    }
}


const reducers = combineReducers({
    page: pageReducer,
    user: userReducer,
    account: accountReducer
});


const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return reducers(state, action)
};


export default rootReducer;
