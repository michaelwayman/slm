import { getUser } from '../auth.jsx';

import {
    CREATE_USER_SUCCESS_RESPONSE,
    PERSIST_USER,
} from '../actions/index.jsx';


export function userReducer(state = getUser, action) {

    if (typeof state === 'function') state = state() || {};

    switch (action.type) {
        case CREATE_USER_SUCCESS_RESPONSE:
            return Object.assign({}, state, action.data);
        case PERSIST_USER:
            return Object.assign({}, state, {token: action.token});
        default:
            return state;
    }
}
