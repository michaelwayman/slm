import { getUser } from '../auth.jsx';

import {
    LOGIN_USER_SUCCESS_RESPONSE,
    CREATE_USER_SUCCESS_RESPONSE,
} from '../actions/index.jsx';


export function userReducer(state = getUser, action) {

    if (typeof state === 'function') {
        state = state() || {};
        console.log(state);
    }

    switch (action.type) {
        case LOGIN_USER_SUCCESS_RESPONSE:
        case CREATE_USER_SUCCESS_RESPONSE:
            return {...state, ...action.data};
        default:
            return state;
    }
}
