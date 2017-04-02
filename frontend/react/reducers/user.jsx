import {
    CREATE_USER_SUCCESS_RESPONSE,
    PERSIST_USER,
} from '../actions/index.jsx';


export function userReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_USER_SUCCESS_RESPONSE:
            return Object.assign({}, state, action.payload);
            break;
        case PERSIST_USER:
            return Object.assign({}, state, {token: action.token});
            break;
        default:
            return state;
    }
}
